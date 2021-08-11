import * as React from 'react'

type HTMLProps = {
  htmlAttributes: any
  headComponents: ReadonlyArray<any>
  bodyAttributes: any
  preBodyComponents: ReadonlyArray<any>
  body: string
  postBodyComponents: ReadonlyArray<any>
}

const HTML: React.FC<HTMLProps> = (props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Mariuzzo</title>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

export default HTML
