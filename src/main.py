from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from config import BASE_URL as base

app = Flask(__name__)

cors = CORS(app)

@app.route("/user/register", methods=['POST'])
def user_register():
	data = request.get_json()

	firstName = data["firstName"]
	lastName = data["lastName"]
	email = data["email"]
	password = data["password"]

	context = {
		"firstName": firstName,
		"lastName": lastName,
		"email": email,
		"password": password,
	}
	# make the request
	r = requests.post(url=base+"/user/register", json=context)
	response = r.json()
	send_data = {
		"success": response
	}
	return send_data

if __name__ == "__main__":
	app.run(debug=True)