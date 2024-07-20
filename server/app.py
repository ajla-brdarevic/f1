from flask import Flask, jsonify
from flask_cors import CORS
import requests
from datetime import datetime

app = Flask(__name__)
CORS(app)

def get_f1_drivers():
    current_year = datetime.now().year
    url = f'http://ergast.com/api/f1/{current_year}/drivers.json'
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        drivers = data['MRData']['DriverTable']['Drivers']
        return drivers
    else:
        return None
    
def get_f1_circuits():
    current_year = datetime.now().year
    url = f'http://ergast.com/api/f1/{current_year}/circuits.json'
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        circuits = data['MRData']['CircuitTable']['Circuits']
        return circuits
    else:
        return None

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/api/drivers', methods=['GET'])
def get_drivers():
    drivers = get_f1_drivers()
    if drivers:
        return jsonify(drivers), 200
    else:
        return "Error fetching data from Ergast API", 500
    
@app.route('/api/circuits', methods=['GET'])
def get_circuits():
    circuits = get_f1_circuits()
    if circuits:
        return jsonify(circuits), 200
    else:
        return "Error fetching data from Ergast API", 500

if __name__ == '__main__':
    app.run(debug=True)