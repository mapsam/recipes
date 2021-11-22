import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Nice from '../components/Nice.js';
import Schema from '../components/Schema.js';
import Markdown from '../components/Markdown.js';

export default function App(props) {
  const router = useRouter();
  const [ url, setUrl ] = useState('https://cooking.nytimes.com/recipes/1020860-pasta-e-ceci-italian-pasta-and-chickpea-stew');
  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState();
  const [ selected, setSelected ] = useState('Nice');

  // load URL if in query
  useEffect(async() => {
    const query = new URLSearchParams(window.location.search);
    const env = query.get('url') || null;
    await getRecipe();
  }, []);

  // update URL as input box changes
  useEffect(() => {
    router.push({
      pathname: '/',
      query: { url }
    })
  }, [url]);

  async function getRecipe(e) {
    if (e) e.preventDefault();
    setLoading(true);
    setData(null);
    const recipe = await fetch(`/api/recipe?url=${url}`)
      .then((res) => res.json());

    setData(recipe);
    setLoading(false);
  }

  return (
    <div className="main">
      <p>Supply a recipe URL from cooking.nytimes.com</p>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}></input>
      <button onClick={getRecipe}>get recipe</button>

      {loading &&
        <p>Fetching recipe ...</p>
      }

      {data &&
        <div className="data">
          <div className="data-radios" onChange={(e) => setSelected(e.target.value)}>
            <input type="radio"
              value="Nice"
              name="selected"
              checked={selected === 'Nice'} />Nice<br />
            <input type="radio"
              value="Schema"
              name="selected"
              checked={selected === 'Schema'} />JSON Schema<br />
            <input type="radio"
              value="Markdown"
              name="selected"
              checked={selected === 'Markdown'} />Markdown<br />
          </div>

          {selected === 'Nice' &&
            <Nice data={data} url={url} />
          }

          {selected === 'Schema' &&
            <Schema data={data} />
          }

          {selected === 'Markdown' &&
            <Markdown data={data} url={url} />
          }
        </div>
      }
    </div>
  )
}
