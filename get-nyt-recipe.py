import sys
from bs4 import BeautifulSoup
import requests

# get recipe
url = sys.argv[1]

# soupify
soup = BeautifulSoup(requests.get(url).text, "html.parser")

# get recipe image
intro = soup.find("div", {"class": "recipe-intro"})
img = intro.find("img")
print("\n![](" + img["src"] + ")")

# get ingredients
print("\n### ingredients")
print("\nquantity | ingredient\n---|---")
ingredientlist = soup.find("ul", {"class": "recipe-ingredients"})
ingredients = ingredientlist.findChildren("li" , recursive=False)
for ingredient in ingredients:
  quantity = ingredient.find("span", {"class": "quantity"}).decode_contents().strip('\t\r\n').strip()
  name = ingredient.find("span", {"class": "ingredient-name"}).decode_contents().strip('\t\r\n').strip()
  print(quantity or "n/a", "|", name)

# get steps
print("\n### steps\n")
stepslist = soup.find("ol", {"class": "recipe-steps"})
steps = stepslist.findChildren("li", recursive=False)
for index, step in enumerate(steps, start=1):
  content = step.decode_contents().strip('\t\r\n').strip()
  print(str(index) + ".", content)

# get notes
print("\n### notes\n")
noteslist = soup.find("ul", {"class": "recipe-notes"})
notes = noteslist.findChildren("li", recursive=False)
for index, note in enumerate(notes, start=1):
  content = note.find("span", {"class": "recipe-note-description"}).decode_contents().strip('\t\r\n').strip()
  print(str(index) + ".", content)

# print url
print("\n", url)
