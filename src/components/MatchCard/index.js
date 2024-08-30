// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchcard} = props
  const {venue, competingTeam, competingTeamLogo, matchStatus} = matchcard
  return (
    <li className="list-item2">
      <div className="card3">
        <img src={competingTeamLogo} className="icon" alt={competingTeam} />
        <p className="heading">{competingTeam}</p>
        <p className="para">{venue}</p>
        <p className="para">{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
