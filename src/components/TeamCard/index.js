// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCard} = props
  const {id, name, teamImageUrl} = teamCard
  return (
    <Link className="link" to={`/team-matches/${id}`}>
      <li className="list-item">
        <div className="card">
          <img src={teamImageUrl} className="image" alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
