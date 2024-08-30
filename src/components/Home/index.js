// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}
  componentDidMount() {
    this.getTeamlist()
  }
  getTeamlist = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const ndata = await response.json()
    const teamsL = ndata.teams
    const updatedData = teamsL.map(eachone => ({
      name: eachone.name,
      id: eachone.id,
      teamImageUrl: eachone.team_image_url,
    }))
    this.setState({teamList: updatedData, isLoading: false})
  }
  renderipl = () => {
    const {teamList} = this.state
    return (
      <div>
        <ul className="list-container">
          {teamList.map(eachcard => (
            <TeamCard teamCard={eachcard} key={eachcard.id} />
          ))}
        </ul>
      </div>
    )
  }
  render() {
    const {isLoading} = this.state
    return (
      <div className="bgcontainer">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="main-icon"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderipl()
        )}
      </div>
    )
  }
}
export default Home
