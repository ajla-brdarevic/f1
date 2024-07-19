from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

def get_f1_drivers():
    url = 'http://ergast.com/api/f1/2024/drivers.json'
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        drivers = data['MRData']['DriverTable']['Drivers']
        return drivers
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

if __name__ == '__main__':
    app.run(debug=True)