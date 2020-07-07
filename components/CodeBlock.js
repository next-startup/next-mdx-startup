import Highlight, { defaultProps } from "prism-react-renderer"
import theme from 'prism-react-renderer/themes/palenight'
import { LiveProvider, LivePreview, LiveEditor, LiveError } from "react-live"
import { mdx } from '@mdx-js/react'
import Button from "./Button"

const CodeBlock = ({children, className, live}) => {
  const language = className.replace(/language-/, '')

  if(live) return (
    <div style={{fontSize: 16, overflowX: 'auto'}}>
      <LiveProvider code={children.trim()} theme={theme} transformCode={code => '/** @jsx mdx */' + code} scope={{mdx, Button}}>
        <LivePreview />
        <LiveEditor style={{borderRadius: 4, marginTop: 10}} />
        <LiveError />
      </LiveProvider>
    </div>
  )

  return(
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {
        ({className, style, tokens, getLineProps, getTokenProps})=> (
          <pre className={className} style={{...style, padding: '6px 12px 12px', fontSize: 16, overflowX: 'auto'}}>
            <span style={{color: 'white', background: 'mediumslateblue', borderRadius: 4, padding: 4, lineHeight: 2.3}}>{language[0].toUpperCase()+language.slice(1)}</span>
            {
              tokens.map((line, i)=>(
                <div key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key)=>(
                    <span key={key} {...getTokenProps({token, key})}></span>
                  ))}
                </div>
              ))
            }
          </pre>
        )
      }
    </Highlight>
  )
}

export default CodeBlock