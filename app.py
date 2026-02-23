from flask import Flask, render_template, jsonify, request
import pandas as pd

app = Flask(__name__)

CSV_FILE = 'FagroUCV1973_2015_prec.csv'

# ... (MANTÉN LA FUNCIÓN get_data() IGUAL QUE ANTES) ...
def get_data():
    df = pd.read_csv(CSV_FILE)
    df.columns = [c.strip() for c in df.columns]
    df['prec'] = pd.to_numeric(df['prec'], errors='coerce').fillna(0)
    df['ano'] = pd.to_numeric(df['ano'], errors='coerce')
    meses_orden = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEPT', 'OCT', 'NOV', 'DIC']
    df['mes'] = pd.Categorical(df['mes'].str.strip(), categories=meses_orden, ordered=True)
    return df

# --- RUTAS DE LA PÁGINA WEB ---

# RUTA 1: Página de Inicio (Tu index.html original)
@app.route('/')
def index():
    return render_template('index.html')

# RUTA 2: El Dashboard (Tu nueva página con gráficas)
@app.route('/dashboard')
def dashboard():
    df = get_data()
    anios = sorted(df['ano'].unique().astype(int).tolist())
    return render_template('dashboard.html', anios=anios)

# --- APIs (Mantener igual que antes) ---
@app.route('/api/mensual')
def api_mensual():
    # ... (Mismo código de la respuesta anterior) ...
    year = int(request.args.get('year', 2015))
    df = get_data()
    df_year = df[df['ano'] == year].sort_values('mes')
    return jsonify({
        'labels': df_year['mes'].astype(str).tolist(),
        'data': df_year['prec'].tolist(),
        'year': year
    })

@app.route('/api/anual')
def api_anual():
    # ... (Mismo código de la respuesta anterior) ...
    start = int(request.args.get('start', 1973))
    end = int(request.args.get('end', 2015))
    df = get_data()
    mask = (df['ano'] >= start) & (df['ano'] <= end)
    df_range = df.loc[mask]
    df_grouped = df_range.groupby('ano')['prec'].mean().reset_index()
    return jsonify({
        'labels': df_grouped['ano'].astype(int).tolist(),
        'data': df_grouped['prec'].round(2).tolist()
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)