from flask import Flask, jsonify, request
from flask_cors import CORS
from models import ApiDetectionRecord

app = Flask(__name__)
CORS(app)

# Almacenamiento temporal en memoria
detection_logs = []

@app.route('/api/detect', methods=['POST'])
def receive_detection():
    data = request.get_json()
    
    if not data or 'apis' not in data:
        return jsonify({"error": "Datos inválidos"}), 400

    browser_info = request.headers.get('User-Agent', 'Desconocido')
    record = ApiDetectionRecord(browser_info, data['apis'])
    
    detection_logs.append(record.to_dict())
    
    return jsonify({
        "status": "success",
        "message": "APIs detectadas y registradas correctamente en el backend",
        "total_registros": len(detection_logs),
        "data": record.to_dict()
    }), 201

@app.route('/api/logs', methods=['GET'])
def get_logs():
    return jsonify(detection_logs), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000) 