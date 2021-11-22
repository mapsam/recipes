import React from 'react';

export default function Schema({ data }) {
  return (
    <React.Fragment>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </React.Fragment>
  )
}

