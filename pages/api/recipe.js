import superagent from 'superagent';
import { JSDOM } from 'jsdom';

export default async function handler(req, res) {
  console.log(`getting ${req.query.url}`);
  const response = await superagent.get(req.query.url.trim());
  const dom = new JSDOM(response.text);
  const scripts = dom.window.document.querySelectorAll('script');
  let recipe;
  scripts.forEach((s) => {
    if (s.type === 'application/ld+json') {
      recipe = JSON.parse(s.text.trim());
    }
  });

  return res.status(200).json(recipe);
}