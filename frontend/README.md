# Band Website

This is my personal project building a full-stack website for my band using React and
Flask. The site will include news such as show dates and upcoming songs,
embeded songs and videos, a contact form, photo gallaries and mobile compatability.

## Tech Stack

- React (Vite)
- JavaScript
- HTML/CSS
- Flask

## Current Features

- Responsive layout
- Show Flyer Gallery
- Annoucement list
- Embedded Spotify player
- Footer with socials icon links
- Gallery page with show photos
- About page with band member description and photos
- Contact Us page with working backend form

## Getting Started

### Frontend

{```bash
cd frontend
npm install
npm run dev}

### Backend (Flask API)

cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

Start the server:

export FLASK_APP=app
flask run --host=0.0.0.0 --port=5000

This will run the Flask backend at:
http://127.0.0.1:5000

If port 5000 is already in use (common on macOS due to AirPlay), you can run it on another port like 5001:

flask run --host=0.0.0.0 --port=5001

The backend exposes one route:

POST /api/contact
Receives contact form submissions from the frontend. Expects a JSON body:

{
    "name": "Your Name",
    "email": "your@email.com",
    "message": "Your message here"
}

Responds with:

{
    "status": "success",
    "message": "Form submitted successfully!"
}

### Project Status

V1:
Added show flyer gallery features: snapping scroll, disappearing arrows at scroll edge, clickable flyer images, captions on hover.
V2:
Added additional Homepage elements: annoucements list and spotify embed.
V3:
Added footer with socials icon links
V4:
Added Gallery page containing show photos using Mansonry for layout and with scroll animations
V5:
Added About page contents
V6:
Added browser page icon, automatically grey out on shows that have past already.  
V7: 
Added “Past Show” marking lable on flyers. Apple Music and Youtube icon links added to footer.
V8: 
Made navbar break away and stick to top of page. 
V9:
Overhauled webpage aesthetics: improved headers and layout and added fonts and colors.
V10:
Added Contact Us shell and navigation.
V11: 
Added header text animations
V12:
Added Flask backend with contact endpoint
V13:
Set up and added basic contact form to contact us page.

### Author

Jonathan Pereda
https://gitlab.com/jonathanpereda
