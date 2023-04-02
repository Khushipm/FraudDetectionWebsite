from flask import Flask
# , request, render_template, Markup
from flask_cors import CORS
import csv

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return "server started..."

@app.route("/mostfraudcategory", methods=["GET"])
def mostfraudcategory():
    category = {}
    with open('data/fraudTrain.csv','r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            # print(row)
            if row["is_fraud"] == '1':
                if category.get(row["category"]):
                    category[row["category"]] += 1
                else:
                    category[row["category"]] = 1
        return category



if __name__ == "__main__":
    app.run(debug=True)