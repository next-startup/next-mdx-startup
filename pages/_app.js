import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock'
import Hr from '../components/Hr'
import MDXWrapper from '../components/MDXWrapper'

const mdComponents = {
  h1: props => <h1 style={{ color: 'slateblue' }} {...props} />,
  code: props => <CodeBlock {...props} />,
  hr: Hr,
  wrapper: MDXWrapper
}

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
    <style jsx global>{`
      html,body {
        background: lavender;
        color: darkslateblue;
        font-family: Avenir Next;
      }
    `}</style>
  </MDXProvider>
)
