## Recipes!

Recipes I've cooked or want to cook are in the [issues](/issues).

## New York Times recipes

I enjoy recipes from cooking.nytimes.com a lot. Many of the issues in this repo are from their site. Check out [SITE]() to view a recipe or copy it in JSON Schema or Markdown format.

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