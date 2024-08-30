// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {banner: '', latestMatch: {}, matchCards: [], isLoading: true}
  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchdetails = data.latest_match_details
    const recentMatch = data.recent_matches

    const updatedMatchDetails = {
      umpires: latestMatchdetails.umpires,
      result: latestMatchdetails.result,
      manOfTheMatch: latestMatchdetails.man_of_the_match,
      id: latestMatchdetails.id,
      date: latestMatchdetails.date,
      venue: latestMatchdetails.venue,
      competingTeam: latestMatchdetails.competing_team,
      competingTeamLogo: latestMatchdetails.competing_team_logo,
      firstInnings: latestMatchdetails.first_innings,
      secondInnings: latestMatchdetails.second_innings,
      matchStatus: latestMatchdetails.match_status,
    }

    const updatedRecentMatches = recentMatch.map(each => ({
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      banner: data.team_banner_url,
      latestMatch: updatedMatchDetails,
      matchCards: updatedRecentMatches,
      isLoading: false,
    })
  }
  renderTeamMatch = () => {
    const {banner, latestMatch, matchCards} = this.state
    return (
      <div className="bgcontainer2">
        <div>
          <img src={banner} className="banner" alt="team banner" />
        </div>
        <div>
          <LatestMatch latestMatch={latestMatch} />
        </div>
        <ul className="list-contain">
          {matchCards.map(each => (
            <MatchCard matchcard={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatch()
        )}
      </>
    )
  }
}
export default TeamMatches
