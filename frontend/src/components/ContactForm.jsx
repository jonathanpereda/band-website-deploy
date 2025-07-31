import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch("https://band-website-backend-deploy.onrender.com/api/contact", {
      //const res = await fetch("http://127.0.0.1:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.status === "success") {
        alert("Message received!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4 bg-frontground/65 border border-dark rounded-xl shadow-lg text-bone">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 bg-background border border-chest rounded text-bone placeholder:text-bone/60"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 bg-background border border-chest rounded text-bone placeholder:text-bone/60"
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full p-2 h-32 resize-none bg-background border border-chest rounded text-bone placeholder:text-bone/60"
      />

      <button
        type="submit"
        className="w-full py-2 font-display bg-chest text-bone rounded hover:bg-chest/80 transition-colors"
      >
        - Send Message -
      </button>
    </form>
  );
}

export default ContactForm;
