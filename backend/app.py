from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    print(f"Contact Form Submission:\nName: {name}\nEmail: {email}\nMessage: {message}\n")

    return jsonify({"status": "success", "message": "Form submitted successfully"})

if __name__ == "__main__":
    app.run(debug=True)
