from flask import Flask, jsonify, render_template
import pandas as pd

app = Flask(__name__)

df = pd.read_csv("FagroUCV1973_2015_prec.csv")

@app.route("/")
def clima():
    return render_template("Clima.html")

@app.route("/api/anios")
def anios():
    return jsonify(sorted(df["ano"].unique().tolist()))

@app.route("/api/mensual/<int:anio>")
def mensual(anio):
    data = df[df["ano"] == anio]
    return jsonify({
        "meses": data["mes"].tolist(),
        "valores": data["prec"].tolist(),
        "promedio": round(data["prec"].mean(), 2)
    })

@app.route("/api/promedio")
def promedio():
    prom = df.groupby("ano")["prec"].mean().reset_index()
    climatologia = round(df["prec"].mean(), 2)
    return jsonify({
        "anios": prom["ano"].tolist(),
        "valores": prom["prec"].tolist(),
        "climatologia": climatologia
    })

if __name__ == "__main__":
    app.run(debug=False)
