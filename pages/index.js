import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Nice from '../components/Nice.js';
import Schema from '../components/Schema.js';
import Markdown from '../components/Markdown.js';

export default function App(props) {
  const [ url, setUrl ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ selected, setSelected ] = useState('Nice');

  // load URL if in query
  useEffect(async() => {
    const query = new URLSearchParams(window.location.search);
    const u = query.get('url');
    if (u) {
      setUrl(decodeURIComponent(u.trim()));
      setLoading(true);
      const recipe = await fetch(`/api/recipe?url=${u}`)
        .then((res) => res.json());

      setData(recipe);
      setLoading(false);
    }
  }, []);

  return (
    <div className="main">

      {loading &&
        <p>Fetching recipe ...</p>
      }

      {data &&
        <React.Fragment>
          <Head>
            <title>{data.name}</title>
            <meta property="og:type" content="website" />
            {/* <meta property="og:url" /> */}
            <meta property="og:title" content={data.name} />
            {/* <meta property="og:description" content={data.name} /> */}
            <meta property="og:image" content={data.image} />
          </Head>

          <div className="data">
            <div className="data-radios" onChange={(e) => setSelected(e.target.value)}>
              <input key="format-select-nice" type="radio"
                value="Nice"
                name="selected"
                defaultChecked={selected === 'Nice'} />Nice<br />
              <input key="format-select-schema" type="radio"
                value="Schema"
                name="selected"
                defaultChecked={selected === 'Schema'} />JSON Schema<br />
              <input key="format-select-markdown" type="radio"
                value="Markdown"
                name="selected"
                defaultChecked={selected === 'Markdown'} />Markdown<br />
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
        </React.Fragment>
      }
    </div>
  )
}
