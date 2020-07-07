const { defaultProps } = require('prism-react-renderer')

export default props => (
  <button
    style={{
      color: 'white',
      background: 'mediumpurple',
      padding: '10px 18px',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer'
    }}
    {...props}
  />
)
