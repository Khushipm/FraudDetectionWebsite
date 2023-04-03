from flask import Flask, jsonify, request
# , request, render_template, Markup
from flask_cors import CORS
import csv
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

def LogisticFraud(to_predict_list):
    to_predict = np.array([to_predict_list])
    loaded_model = pickle.load(open("models/logmodel.pkl", "rb"))
    result = loaded_model.predict(to_predict)
    return result[0]

@app.route("/logfraud", methods=["POST"])
def logfraud():
    if request.method == "POST":
        print(request.json)
        to_predict_list = request.json
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(float, to_predict_list))
        result = LogisticFraud(to_predict_list)
        return result[0]


@app.route("/", methods=["GET"])
def home():
    return "server started..."

@app.route("/mostfraudcategory", methods=["GET"])
def mostfraudcategory():
    fraud, notfraud = {}, {}
    with open('data/fraudTrain.csv','r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            # print(row)
            if row["is_fraud"] == '1':
                if fraud.get(row["category"]):
                    fraud[row["category"]] += 1
                else:
                    fraud[row["category"]] = 1
            else:
                if notfraud.get(row["category"]):
                    notfraud[row["category"]] += 1
                else:
                    notfraud[row["category"]] = 1
        return jsonify(fraud,notfraud)



if __name__ == "__main__":
    app.run(debug=True)