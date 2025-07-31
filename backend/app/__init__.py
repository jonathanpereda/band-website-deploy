from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

SENDGRID_API_KEY = os.environ.get("SENDGRID_API_KEY")
TO_EMAIL = os.environ.get("TO_EMAIL")
FROM_EMAIL = "form@stolenstreetsigns.com" 

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    print(f"Contact Form Submission:\nName: {name}\nEmail: {email}\nMessage: {message}\n")

    email_data = {
        "personalizations": [
            {
                "to": [{"email": TO_EMAIL}],
                "subject": f"New Contact Form Submission from {name}",
                "reply_to": {"email": email}
            }
        ],
        "from": {"email": FROM_EMAIL},
        "content": [
            {
                "type": "text/plain",
                "value": f"Name: {name}\nEmail: {email}\nMessage:\n{message}"
            }
        ]
    }

    response = requests.post(
        "https://api.sendgrid.com/v3/mail/send",
        headers={
            "Authorization": f"Bearer {SENDGRID_API_KEY}",
            "Content-Type": "application/json"
        },
        json=email_data
    )

    if response.status_code >= 200 and response.status_code < 300:
        return jsonify({"status": "success", "message": "Form submitted!"})
    else:
        print("SendGrid error:", response.text)
        return jsonify({"status": "error", "message": "Failed to send form"}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)

app = app