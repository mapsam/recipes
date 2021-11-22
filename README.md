## Recipes!

Recipes I've cooked or want to cook are in the [issues](/issues).

## New York Times recipes

I greatly enjoy recipes from cooking.nytimes.com. Many of the recipes in this repo are from their site. Check out [nytcooking.vercel.app](https://nytcooking.vercel.app/) to view a recipe or copy it in [JSON Schema](https://schema.org/Recipe) or Markdown format. Shoutout to NYT for saving their recipes in common formats! :clap:

Example recipe: https://nytcooking.vercel.app/?url=https%3A%2F%2Fcooking.nytimes.com%2Frecipes%2F1020860-pasta-e-ceci-italian-pasta-and-chickpea-stew

Site built with [Next.js](https://nextjs.org/) and [Vercel](https://vercel.com/).

### Develop

```shell
# run dev
npm run dev

# run production
npm run build && npm start
```

### Python scraper

This repo also has a python script to convert a NYT recipe to Markdown.

```shell
pip install -r requirements.txt
python get-nyt-recipe.py <url>
```