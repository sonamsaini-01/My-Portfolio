import requests
from bs4 import BeautifulSoup

URL = "https://books.toscrape.com/"

def get_books():
    response = requests.get(URL)
    soup = BeautifulSoup(response.text, "html.parser")
    
    books_data = []
    
    # The website wraps every book in an <article class="product_pod"> tag
    for book in soup.select("article.product_pod"):
        title = book.h3.a["title"]
        
        # Extract price and remove the encoding artifact if present
        price_raw = book.select_one(".price_color").text
        price = price_raw.replace('Â', '') 
        
        # Availability text has a lot of whitespace around it, so we strip it
        availability = book.select_one(".instock.availability").text.strip()
        
        # Rating is stored as a class name (e.g., <p class="star-rating Three">)
        rating_elem = book.select_one("p.star-rating")
        rating = rating_elem["class"][1] if rating_elem else "None"
        
        books_data.append({
            "title": title,
            "price": price,
            "rating": rating,
            "availability": availability
        })
        
    return books_data