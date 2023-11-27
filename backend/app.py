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

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/get-similar-bars")
def return_similar_bars():

    bar1 = request.get_json()['bar']
    topk = request.get_json()['topk']
    data = pd.read_csv('processed_data.csv')
    print(data.head())
    bar_vectors = {}
    bar_names = np.unique(data['bar_name'])

    def convert_to_array(string):
        numbers = np.array(string[1:-1].split(" "))
        return numbers
    
    data['sentence_embeddings'] = data['sentence_embeddings'].apply(lambda x: np.array(convert_to_array(x)))

    for bar_name in bar_names:
        bar_vectors[bar_name] = np.mean(np.array([np.array(i) for i in data[data['bar_name'] == bar_name]['sentence_embeddings']]), axis = 0)

    similarities_df = pd.DataFrame(bar_names, columns=['bar_name'])
    for bar_name in bar_names:
            similarities_df[bar_name] = [1 - distance.cosine(bar_vectors[bar_name], bar_vectors[bar_name_compare]) for bar_name_compare in bar_names]

    return similarities_df['bar_name'].iloc[similarities_df[bar1].nlargest(topk + 1).index.values[1:]]
