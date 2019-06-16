import { Card, Grid, Container} from 'semantic-ui-react'
import GithubSVG from './svg/github'
import LinkedinSVG from './svg/linkedin'
import Interface from './svg/interface'
import css from '../static/styles/app.css'

const HomeContainer = (props) => (
  
  <Grid className={css.maingrid} stackable columns={2} centered>
  <Grid.Row className={css.gridrow}>

    <Grid.Column className={css.leftside}>
      <img className={css.profileimage} src='https://avatars1.githubusercontent.com/u/50161027?s=460&v=4' />

      <Card className={css.card}>
        <Card.Content>
          <Card.Header>Rami H</Card.Header>
          
          <Card.Meta>
          <span>Toronto, ON</span>
          </Card.Meta>
          
          <Card.Description>
            Go, Javascript developer.<br />
            GCP, Docker deployer.<br /> 
            Kubernetes aspirer.<br />
          </Card.Description>
        </Card.Content>

        <Card.Content className={css.icocontainer} extra>
          <a href="https://www.github.com/rumsrami" target="_blank">
          <GithubSVG />
          </a>
          <a href="https://www.linkedin.com/in/rami-hassanein/" target="_blank">
          <LinkedinSVG />
          </a>
          <a href="https://medium.com/@rumsrami" target="_blank">
          <img className={css.mediumico} src="/static/img/medium.ico" />
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>

    <Grid.Column className={css.rightside}>
      <Interface className={css.interface}/>
    </Grid.Column>
  </Grid.Row>

</Grid>
)

export default HomeContainer
