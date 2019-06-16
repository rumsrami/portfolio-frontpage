import HomeContainer from '../components/home'
import Meta from '../components/meta'
import css from '../static/styles/app.css'

const Index = props => (
  <div className={css.body}>
  <Meta />
  <HomeContainer />
  </div>
)

export default Index;