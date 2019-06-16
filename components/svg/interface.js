import css from '../../static/styles/app.css'
import { Button, Label, Icon } from 'semantic-ui-react'

const convertUnicode = (input) => {
  return input.replace(/\\u(\w\w\w\w)/g, (a, b) => {
    var charcode = parseInt(b, 16);
    return String.fromCharCode(charcode)
  })
}

const Interface = (props) => (
  <div className={css.rightSideTextContainer}>
  <h2 className={css.line1}>
      <span style={{color: '#0077b5'}}>type </span>
      <span style={{color: '#00ab6c'}}><em>Developer</em></span> 
      <span style={{color: '#0077b5'}}> struct </span>
      <span>{`${convertUnicode('\u007B')}`}</span>
  </h2>
  <h3><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Icon name='quote left' />
      <span> Personal </span>
      <span style={{color: '#00ab6c'}}>*Information</span>
  </h3>
  <h3><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Icon name='code' />
      <span> Project </span>
      <span style={{color: '#00ab6c'}}>*Repos</span>
  </h3>
  <h3><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Icon name='certificate' />
      <span> Experience </span>
      <span style={{color: '#00ab6c'}}>*Professional</span>
  </h3>
  <h3><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Icon name='graduation cap' />
      <span> Education </span>
      <span style={{color: '#00ab6c'}}>*Academic</span>
  </h3>
  <h3><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Icon name='book' />
      <span> SelfStudy </span>
      <span style={{color: '#00ab6c'}}>*Original</span>
  </h3>
  <h2>{`${convertUnicode('\u007D')}`}</h2>
  </div>
)

export default Interface

  {/* 

  <Button as='div' labelPosition='right'>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Button basic color='black'>
        SelfStudy
      </Button>
      <Label as='a' basic color='green' pointing='left'>
        <Icon name='quote left' />
      </Label>
  </Button> <br /> <br /> */}