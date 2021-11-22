import React from 'react';

export default function Nice({ data, url }) {
  return (
    <React.Fragment>
      <h1>{data.name}</h1>
      <p><em>{data.recipeCategory}</em></p>
      <img src={data.image} />

      <p dangerouslySetInnerHTML={{__html: data.description}}>{}</p>

      <h3>Ingredients</h3>
      <ul>
      {data.recipeIngredient.map((ingredient) => {
        return <li>{ingredient}</li>;
      })}
      </ul>

      <h3>Steps</h3>
      <ol>
      {data.recipeInstructions.map((instruction) => {
        return <li>{instruction.text}</li>;
      })}
      </ol>

      <a href={url}>{url}</a>
    </React.Fragment>
  )
}

