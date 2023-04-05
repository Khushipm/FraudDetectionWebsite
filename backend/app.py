from flask import Flask, jsonify, request
# , request, render_template, Markup
from flask_cors import CORS
import csv
import pickle
import numpy as np
from sklearn.preprocessing import StandardScaler
import pandas as pd

app = Flask(__name__)
CORS(app)

def SVM(to_predict_list):
    print(to_predict_list)
    loaded_model = pickle.load(open("models/riskassesment.pkl", "rb"))
    result = loaded_model.predict(to_predict_list)
    return result[0]

@app.route("/riskAssesment", methods=["POST"])
def riskAssesment():
    if request.method == "POST":
        ans = []
        # sc = StandardScaler()
        to_predict_list = request.json
        to_predict_list = list(to_predict_list.values())
        ans.append(to_predict_list)

        result = SVM((ans))
        print(result)
    return "hi"

def LogisticFraud(to_predict_list):
    # to_predict = np.array([to_predict_list])
    loaded_model = pickle.load(open("models/logmodel.pkl", "rb"))
    result = loaded_model.predict(to_predict_list)
    return result[0]

@app.route("/logfraud", methods=["POST"])
def logfraud():
    if request.method == "POST":
        ans = []
        # sc = StandardScaler()
        # print(request.json)
        to_predict_list = request.json
        print(to_predict_list)
        to_predict_list = list(to_predict_list.values())
        # to_predict_list = list(map(float, to_predict_list))
        # print(len(to_predict_list))
        # print(to_predict_list)
        ans.append(to_predict_list)
        # print(ans)
        # print(sc.fit_transform(ans))
        # ans.append)
        # print(ans)
        result = LogisticFraud((ans))
        print(result)
        # print(result)
    return "hi"

@app.route("/", methods=["GET"])
def home():
    return "server started..."

@app.route("/transactiondata", methods=["GET"])
def transdata():
    ans = []
    count = 0
    with open('data/fraudTrain.csv','r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            current = []
            current.append(count)
            current.append(row["cc_num"])
            current.append(row["merchant"])
            current.append(row["amt"])
            current.append(row["is_fraud"])
            ans.append(current)
            print(current)
            count += 1
            if count == 24:
                return jsonify(ans)






@app.route("/piechart", methods=["GET"])
def piechart():
    df = pd.read_csv("data/fraudTrain.csv")
    ans = df[df['is_fraud']==1]["job"].value_counts(sort=True,ascending=False).head(10)
    # print(ans)

    # job_fraud = {}
    # with open('data/fraudTrain.csv','r') as file:
    #     reader = csv.DictReader(file)
    #     for row in reader:
    #         if row["is_fraud"] == '1':
    #             if job_fraud.get(row["job"]):
    #                 job_fraud[row["job"]] += 1
    #             else:
    #                 job_fraud[row["job"]] = 1
    #     # print(job_fraud)
    # print(ans.to_dict())
    return ans.to_dict()


@app.route("/barchart", methods=["GET"])
def barchart():
    df = pd.read_csv("data/fraudTrain.csv")
    fraud = df[df['is_fraud']==1]["category"].value_counts()
    notfraud = df[df['is_fraud']==0]["category"].value_counts()
    # fraud, notfraud = {}, {}
    # with open('data/fraudTrain.csv','r') as file:
    #     reader = csv.DictReader(file)
    #     for row in reader:
    #         # print(row)
    #         if row["is_fraud"] == '1':
    #             if fraud.get(row["category"]):
    #                 fraud[row["category"]] += 1
    #             else:
    #                 fraud[row["category"]] = 1
    #         else:
    #             if notfraud.get(row["category"]):
    #                 notfraud[row["category"]] += 1
    #             else:
    #                 notfraud[row["category"]] = 1
    return jsonify(fraud.to_dict(),notfraud.to_dict())



if __name__ == "__main__":
    app.run(debug=True)