# Band Website

This is a full-stack website project for my band, built using React and Flask.
The site includes announcements, show flyers, embedded music/video content, a contact form, photo galleries, and mobile compatibility.

---

## Tech Stack

- **Frontend:** React (Vite), JavaScript, HTML/CSS
- **Backend:** Python (Flask)
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## Current Features

- Responsive layout
- Show flyer gallery with scroll snapping and hover captions
- Annoucement list
- Embedded Spotify player
- Footer with social media icon links
- Gallery page with show photos using masonry layout and scroll animations
- About page with band members descriptions and photos
- Contact Us page with working backend integration (SendGrid email support)
- Sticky navbar and animated headers

---

## Getting Started

### Frontend

{```bash
cd frontend
npm install
npm run dev}

### Backend (Flask API)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Start the server:

```bash
export FLASK_APP=app
flask run --host=0.0.0.0 --port=5000
```

If port 5000 is already in use (if you're on macOS due to AirPlay), run on another port:

```bash
flask run --host=0.0.0.0 --port=5001
```

#### API Endpoint

**POST** `/api/contact`  
Receives contact form submissions from the frontend.  
Expected JSON body:
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message here"
}
```

Responds with:
```json
{
  "status": "success",
  "message": "Form submitted successfully!"
}
```

---

## Project Versions

- **V1** – Show flyer gallery (snap scroll, hover captions, clickable flyers)
- **V2** – Homepage updates (announcements list + Spotify embed)
- **V3** – Footer with social media icon links
- **V4** – Photo gallery page with masonry layout + scroll animations
- **V5** – About page content
- **V6** – Auto-grey past shows
- **V7** – “Past Show” label, Apple Music & YouTube footer links
- **V8** – Sticky navbar
- **V9** – Aesthetic overhaul (headers, layout, fonts, colors)
- **V10** – Contact Us page shell and routing
- **V11** – Header symbol animations
- **V12** – Flask backend set up with `/api/contact`
- **V13** – Contact form (frontend) added
- **V14** – Email sending via SendGrid
- **V15** – Fixed header layout issues

---

## Author

Jonathan Pereda
https://gitlab.com/jonathanpereda
