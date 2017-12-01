from flask import Flask, url_for, jsonify
import psutil
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return url_for('cpu_util')

@app.route("/cpu_usage")
def cpu_usage():
    return json.dumps(psutil.cpu_percent(interval=1, percpu=True))

@app.route("/memory_usage")
def memory_usage():
    return json.dumps(psutil.virtual_memory().percent)

@app.route("/heroes_data")
def hero():
	x=[{ 'id': 11, 'name': 'Mr. Nice' },
        { 'id': 12, 'name': 'Narco' },
        { 'id': 13, 'name': 'Bombasto' },
        { 'id': 14, 'name': 'Celeritas' },
        { 'id': 15, 'name': 'Magneta' },
        { 'id': 16, 'name': 'RubberMan' },
        { 'id': 17, 'name': 'Dynama' },
        { 'id': 18, 'name': 'Dr IQ' },
        { 'id': 19, 'name': 'Magma' },
        { 'id': 20, 'name': 'Tornado' }]
	return jsonify(x)

if __name__ == "__main__":
  app.run()
