# Portfolio

A personal portfolio website built with Flask, showcasing my background as a Computer Science student along with a dedicated section for web-scraping projects.

## About

Hi, I'm **Sonam** — a Computer Science Engineering student interested in Artificial Intelligence, Machine Learning, and Full-Stack Development. This site is where I collect the work I've done: education, skills, certificates, and hands-on projects (especially data scraping and analysis).

## Features

- **Portfolio pages** — Home, About, Education, Skills, Projects, Certificates, Contact.
- **Web-scraping showcase** — a `/scraping` section split into three categories:
  - **Static scraping** (BeautifulSoup) — e.g. Books to Scrape, IMDb Top 250, Goodreads quotes, Wikipedia data, world population.
  - **API scraping** — DummyJSON, FakeStore, JSONPlaceholder, Universities API, Tesla Autolist.
  - **Dynamic scraping** (Selenium) — automation-driven pages, Amazon laptops, fake jobs.
- **Notebook viewer** — rendered Jupyter notebooks (`static/Notebooks/*.html`) served through a `/viewer` route so each scraping project can be explored end-to-end.
- **Datasets** — the raw CSV outputs from each scraping project are shipped in `static/datasets/` so visitors can download them.
- **Live book scraper** — the `/scraping/books` route hits [books.toscrape.com](https://books.toscrape.com/) on request and renders the results.

## Tech Stack

- **Backend:** Python, Flask, Gunicorn
- **Scraping:** requests, BeautifulSoup4, Selenium, webdriver-manager
- **Data:** pandas
- **Frontend:** HTML, CSS, JavaScript (Jinja2 templates)

## Project Structure

```
My-Portfolio/
├── app.py                  # Flask app + routes
├── requirements.txt
├── scrapers/
│   └── books_scraper.py    # Live scraper for /scraping/books
├── templates/              # Jinja2 templates (base, hero, about, projects, etc.)
├── static/
│   ├── css/                # Stylesheets
│   ├── js/                 # main.js, animation.js
│   ├── images/             # Profile picture, project images
│   ├── icons/              # Icon assets
│   ├── datasets/           # CSV outputs from scraping projects
│   └── Notebooks/          # Rendered Jupyter notebooks
```



## Routes

| Route                | Page                                   |
| -------------------- | -------------------------------------- |
| `/`                  | Home / hero section                    |
| `/about`             | About me                               |
| `/education`         | Education                              |
| `/skills`            | Skills                                 |
| `/projects`          | Projects                               |
| `/certificates`      | Certificates                           |
| `/contact`           | Contact                                |
| `/scraping`          | Scraping projects index                |
| `/scraping/static`   | Static-site scraping projects          |
| `/scraping/api`      | API-based scraping projects            |
| `/scraping/dynamic`  | Selenium-based scraping projects       |
| `/scraping/books`    | Live scraper — books.toscrape.com      |
| `/viewer`            | Rendered notebook viewer               |


