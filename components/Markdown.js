import React from 'react';
import dedent from 'dedent';

export default function Schema({ data, url }) {
  const ingredients = data.recipeIngredient.map((i) => `* ${i}`);
  const steps = data.recipeInstructions.map((s, i) => `${i + 1}. ${s.text}`);

  return (
    <React.Fragment>
      <pre>{dedent`
      # ${data.name}

      _${data.recipeCategory}_

      ![recipe-image](${data.image})

      ${data.description}

      ### Ingredients

      ${ingredients.join('\n')}

      ### Steps

      ${steps.join('\n')}

      _[${url}](${url})_

      `}</pre>
    </React.Fragment>
  )
}