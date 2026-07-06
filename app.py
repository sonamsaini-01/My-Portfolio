from flask import Flask, render_template
from scrapers.books_scraper import get_books

app = Flask(__name__)

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
    return render_template("projects.html")

@app.route("/certificates")
def certificates():
    return render_template("certificates.html")

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


if __name__ == "__main__":
    app.run(debug=True)