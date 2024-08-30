// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    date,
    competingTeam,
    competingTeamLogo,
    result,
    venue,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatch
  return (
    <div className="contain">
      <div>
        <p className="head">{competingTeam}</p>
        <p className="para">{date}</p>
        <p className="para">{venue}</p>
        <p className="para">{result}</p>
      </div>
      <div>
        <img src={competingTeamLogo} className="image1" alt={competingTeam} />
      </div>
      <div>
        <h1 className="head2">First Innings</h1>
        <p className="para">{firstInnings}</p>
        <h1 className="head2">Second Innings</h1>
        <p className="para">{secondInnings}</p>
        <h1 className="head2">Man of The Match</h1>
        <p className="para">{manOfTheMatch}</p>
        <h1 className="head2">Umpires</h1>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
