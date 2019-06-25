import React from 'react'
export default (pluginOptions) => console.log('smashing') || ({
  headElements: elements => {
    console.log('headelements')
    return [
      ...elements,
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Roboto&display=swap" />
    ]
  }
})
