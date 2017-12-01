import json

import psutil
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/cpu_usage')
def sys_util():
    return json.dumps(psutil.cpu_percent(interval=1, percpu=True))

@app.route('/hosts')
def host_list():
    return json.dumps(['136.101.197.136','84.92.41.238','239.227.202.165','165.97.145.41','32.66.23.232'])

if __name__ == "__main__":
    app.run()
