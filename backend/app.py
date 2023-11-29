from flask import Flask, request
from flask_cors import CORS
import pandas as pd
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import os
import nltk
nltk.download('punkt')
from nltk.tokenize import word_tokenize
from sentence_transformers import SentenceTransformer
from scipy.spatial import distance
from sklearn.feature_extraction.text import TfidfVectorizer
import gensim
from gensim.models import Word2Vec
from transformers import AutoModel
from numpy.linalg import norm
import json
from fuzzywuzzy import process

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

#Already implemented in search-by-keyword
# @app.route("/get-similar-bars")
# def return_similar_bars():

#     bar1 = request.get_json()['bar']
#     topk = int(request.get_json()['topk'])
#     data = pd.read_csv('processed_data.csv')
#     bar_vectors = {}
#     bar_names = np.unique(data['bar_name'])

#     def convert_to_array(string):
#         numbers = np.array([float(i) for i in string[1:-1].split(" ") if i != ""])
#         return numbers
    
#     data['sentence_embeddings'] = data['sentence_embeddings'].apply(lambda x: np.array(convert_to_array(x)))
#     for bar_name in bar_names:
#         bar_vectors[bar_name] = np.mean(np.array([np.array(i) for i in data[data['bar_name'] == bar_name]['sentence_embeddings']]), axis = 0)

#     similarities_df = pd.DataFrame(bar_names, columns=['bar_name'])
#     for bar_name in bar_names:
#             similarities_df[bar_name] = [1 - distance.cosine(bar_vectors[bar_name], bar_vectors[bar_name_compare]) for bar_name_compare in bar_names]
#     return str([similarities_df['bar_name'].iloc[similarities_df[bar1].nlargest(topk + 1).index.values[1:]].values])

@app.route("/search-by-keyword",methods=['GET', 'POST'])
def search_keyword():


    print('request got')
    word = request.get_json()['word']
    target_words = ['backyard', 'cedar_lane', 'chimys', 'commanders_cove', 'corner',
                'dixie_chicken', 'dry_bean', 'duddleys', 'good_bull_icehouse', 'harrys',
                'icon', 'logies', 'mama_sake', 'obannons', 'paddock', 'rebel',
                'rough_draught', 'shiner_park', 'social', 'spot', 'tipsy_turtle', 'twelve']

    print("word is: ",word)
    matches = process.extract(word, target_words, limit=len(target_words))

    filtered_matches = [match for match in matches if match[1] >= 80]

    if filtered_matches:
        bar1, best_score = filtered_matches[0]
        print(bar1)
        topk = int(request.get_json()['topk'])
        data = pd.read_csv('processed_data.csv')
        bar_vectors = {}
        bar_names = np.unique(data['bar_name'])

        def convert_to_array(string):
            numbers = np.array([float(i) for i in string[1:-1].split(" ") if i != ""])
            return numbers
        
        data['sentence_embeddings'] = data['sentence_embeddings'].apply(lambda x: np.array(convert_to_array(x)))
        for bar_name in bar_names:
            bar_vectors[bar_name] = np.mean(np.array([np.array(i) for i in data[data['bar_name'] == bar_name]['sentence_embeddings']]), axis = 0)

        similarities_df = pd.DataFrame(bar_names, columns=['bar_name'])
        for bar_name in bar_names:
                similarities_df[bar_name] = [1 - distance.cosine(bar_vectors[bar_name], bar_vectors[bar_name_compare]) for bar_name_compare in bar_names]
        print(similarities_df['bar_name'].iloc[similarities_df[bar1].nlargest(topk + 1).index.values[1:]].values)
        return str([i for i in list(similarities_df['bar_name'].iloc[similarities_df[bar1].nlargest(topk + 1).index.values[1:]].values)])
        
    else:

        topk = int(request.get_json()['topk'])
        num_characteristics = int(request.get_json()['num_characteristics'])
        data = pd.read_csv('processed_data.csv')

        def convert_to_array(string):
            numbers = np.array([float(i) for i in string[1:-1].split(" ") if i != ""])
            return numbers
        
        data['sentence_embeddings'] = data['sentence_embeddings'].apply(lambda x: np.array(convert_to_array(x)))

        def get_characteristics(data, num_characteristics = 10):
            bar_names = np.unique(data['bar_name'])
            bar_reviews = []
            data['tokenized_review'] = data.apply(lambda x: " ".join(word_tokenize(x['review'])) if not isinstance(x['review'], float) else "", axis = 1)
            for bar_name in bar_names:
                bar_reviews.append(''.join(data[data['bar_name'] == bar_name]['tokenized_review']))

            vectorizer = TfidfVectorizer(stop_words='english')
            tfidf_matrix = vectorizer.fit_transform(bar_reviews)

            feature_names = vectorizer.get_feature_names_out()

            top_terms_per_bar = {}
            for reviews_index, bar in enumerate(bar_names):
                bar_tfidf_scores = tfidf_matrix[reviews_index].toarray().flatten()

                top_term_indices = bar_tfidf_scores.argsort()[-num_characteristics:][::-1]

                # Map indices to terms
                top_terms = [feature_names[index] for index in top_term_indices]

                # Store top N terms for the current bar
                top_terms_per_bar[bar] = top_terms
            return(top_terms_per_bar)
        
        bar_characteristics = get_characteristics(data, num_characteristics)

        model = SentenceTransformer('all-MiniLM-L6-v2')
        query_embedding = model.encode(word)

        if query_embedding is None:
            return None, 0
        
        similarities = [(1 - distance.cosine(query_embedding, np.mean([np.array(model.encode(i)) for i in bar_characteristics[word]], axis = 0)), word) for word in bar_characteristics]
        
        similarities.sort(key = lambda x: x[0], reverse = True)

        if topk < len(similarities):
            return str([bar[1] for bar in similarities[:topk]])
        else:
            return str([bar[1] for bar in similarities])
        
    return None