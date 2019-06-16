import css from '../../static/styles/app.css'

const convertUnicode = (input) => {
  return input.replace(/\\u(\w\w\w\w)/g, (a, b) => {
    var charcode = parseInt(b, 16);
    return String.fromCharCode(charcode)
  })
}

const Interface = (props) => (
  <h2 className={css.rightsidetext}>
      {`type Developer interface ${convertUnicode('\u007B')}`} <br />

      {`${convertUnicode('\u007D')}`} <br/>
  </h2>
)

export default Interface