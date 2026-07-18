from flask import Flask, render_template, abort
from scrapers.books_scraper import get_books

app = Flask(__name__)

# Featured (end-to-end) projects. Each key is the URL slug used at /projects/<slug>.
# Fill in real GitHub repo links, live demo URLs and screenshot paths as they go live.
FEATURED_PROJECTS = {
    "faqflow-ai": {
        "emoji": "🤖",
        "title": "FAQFlow AI",
        "tagline": "An AI-powered FAQ chatbot that answers user questions instantly.",
        "motive": "Businesses and websites get the same questions again and again. I built FAQFlow AI to automate those repetitive answers using AI, so users get instant, accurate responses without waiting for human support.",
        "features": [
            "AI-powered question answering using LLM APIs",
            "Custom knowledge base — feed it your own FAQs",
            "Clean chat interface with conversation history",
            "Handles follow-up questions with context",
            "Anyone Can integrate the chatbot in their website"
        ],
        "tech": ["Python","SQLite", "Flask", "Gemini API", "HTML/CSS/JS"],
        "github": "https://github.com/sonamsaini-01/FAQFlow-AI",
        "live_demo": "https://faqflow-ai.onrender.com",
        "screenshots": [
             "images/Faqflow1.png",
             "images/Faqflow2.png",
        ],
    },
    "financial-advisor": {
        "emoji": "💰",
        "title": "Financial Advisor",
        "tagline": "A smart assistant that helps users plan budgets and understand their finances.",
        "motive": "Most students and young earners struggle to track expenses and plan savings. This project turns raw financial inputs into clear insights and personalised suggestions, making money management simple.",
        "features": [
            "Expense tracking and budget breakdown",
            "Personalised saving and spending insights",
            "Interactive charts and visual summaries",
            "AI-generated financial tips",
        ],
        "tech": ["TypeScript", "CSS", "Supabase", "AI APIs"],
        "github": "https://github.com/sonamsaini-01/Financial-Advisor",
        "live_demo": "https://finmentor-ai-blue.vercel.app/",
        "screenshots": [
            "images/Finmentor1.png",
             "images/Finmentor2.png",
        ],
    },
    # "face-recognition-attendance": {
    #     "emoji": "👤",
    #     "title": "Face Recognition Attendance System",
    #     "tagline": "Automated attendance marking using real-time face recognition.",
    #     "motive": "Manual attendance wastes class time and is easy to fake with proxies. This system uses computer vision to recognise faces in real time and mark attendance automatically and accurately.",
    #     "features": [
    #         "Real-time face detection and recognition via webcam",
    #         "Automatic attendance logging with date and time",
    #         "Student registration with face encoding",
    #         "Attendance reports exportable to CSV/Excel",
    #     ],
    #     "tech": ["Python", "OpenCV", "face_recognition", "SQLite"],
    #     "github": "https://github.com/sonamsaini-01",
    #     "live_demo": "",
    #     "screenshots": [],
    # },
    "women-safety-app": {
        "emoji": "🛡️",
        "title": "Safe Her",
        "tagline": "An emergency safety app with instant SOS alerts and live location sharing.",
        "motive": "In an emergency, every second matters. I built this app so that help is one tap away — it instantly alerts trusted contacts with the user's live location when they feel unsafe.",
        "features": [
            "One-tap SOS alert to trusted contacts",
            "Live location sharing in emergencies",
            "Quick access to 7+ Features in one app",
            "Simple, fast UI designed for panic situations",
        ],
        "tech": ["TypeScript", "Supabase", "Geolocation APIs", "SMS/Email APIs"],
        "github": "https://github.com/sonamsaini-01/Safe-Her",
        "live_demo": "https://safe-her-mind-sparks.lovable.app/",
        "screenshots": [
             "images/project1.png",
             "images/project2.png",
    
        ],
    },
    # "ai-resume-analyzer": {
    #     "emoji": "📄",
    #     "title": "AI Resume Analyzer",
    #     "tagline": "Analyses resumes against job descriptions and suggests improvements.",
    #     "motive": "Most resumes get rejected by ATS systems before a human ever reads them. This tool analyses a resume the way a recruiter and an ATS would, scoring it and suggesting concrete improvements.",
    #     "features": [
    #         "Resume parsing from PDF/DOCX",
    #         "ATS-style keyword and skill matching against job descriptions",
    #         "Section-wise feedback and improvement suggestions",
    #         "Overall resume score with strengths and weaknesses",
    #     ],
    #     "tech": ["Python", "NLP", "Flask", "AI APIs"],
    #     "github": "https://github.com/sonamsaini-01",
    #     "live_demo": "",
    #     "screenshots": [],
    # },
#     "student-dropout-prediction": {
#         "emoji": "🎓",
#         "title": "Student Dropout Prediction System",
#         "tagline": "A machine learning system that predicts students at risk of dropping out.",
#         "motive": "Institutions often notice struggling students too late. Using historical academic and demographic data, this system flags at-risk students early so timely support can be provided.",
#         "features": [
#             "ML model trained on academic and demographic data",
#             "Risk prediction with probability scores",
#             "Comparison of multiple ML algorithms for best accuracy",
#             "Dashboard-style visualisation of predictions",
#         ],
#         "tech": ["Python", "Scikit-learn", "Pandas", "Flask"],
#         "github": "https://github.com/sonamsaini-01",
#         "live_demo": "",
#         "screenshots": [],
#     },
 }

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/education")
def education():
    return render_template("education.html")

@app.route("/skills")
def skills():
    return render_template("skills.html")

@app.route("/projects")
def projects():
    return render_template("projects.html", featured=FEATURED_PROJECTS)

@app.route("/projects/<slug>")
def project_detail(slug):
    project = FEATURED_PROJECTS.get(slug)
    if project is None:
        abort(404)
    return render_template("project_detail.html", project=project, slug=slug)

@app.route("/certificates")
def certificates():
    return render_template("certificates.html")

@app.route("/journey")
def journey():
    return render_template("journey.html")

@app.route("/journey/internship")
def internship():
    return render_template("internship.html")

@app.route("/journey/btech")
def btech_journey():
    return render_template("btech_journey.html")

@app.route("/journey/school")
def school_journey():
    return render_template("school_journey.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/scraping")
def scraping():
    return render_template("scraping.html")

@app.route("/scraping/static")
def scraping_static():
    return render_template("scraping_static.html")

@app.route("/scraping/books")
def books_to_scrape():
    scraped_data = get_books()
    # Pass the data to your HTML file
    return render_template("books_to_scrape.html", books=scraped_data)

@app.route('/viewer')
def viewer():
    return render_template('viewer.html')

@app.route("/scraping/api")
def scraping_api():
    return render_template("scraping_api.html")

@app.route("/scraping/dynamic")
def scraping_dynamic():
    return render_template("scraping_dynamic.html")

@app.route("/.well-known/appspecific/com.chrome.devtools.json")
def chrome_devtools_probe():
    return "", 204


if __name__ == "__main__":
    app.run(debug=True)