from flask import Flask, render_template, jsonify
import csv
from collections import defaultdict

app = Flask(__name__)

DATA_FILE = "data/FagroUCV1973_2015_prec.csv"

def load_data():
    data = defaultdict(lambda: [0]*12)

    with open(DATA_FILE, newline='', encoding='utf-8') as f:
        reader = csv.reader(f)
        next(reader)  # skip header

        for year, month, prec in reader:
            data[int(year)][int(month)-1] = float(prec)

    return data

@app.route("/")
def index():
    return render_template("dashboard.html")

@app.route("/api/precipitacion")
def precipitacion():
    data = load_data()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
