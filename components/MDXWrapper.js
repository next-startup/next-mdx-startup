const MDXWrapper = (props) => {
  return(
    <div style={{
      maxWidth: 700,
      margin: '0 auto',
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,.04)',
      padding: '20px 30px',
      boxSizing: 'border-box',
      borderRadius: 4
    }} {...props}/>
  )
}

export default MDXWrapper