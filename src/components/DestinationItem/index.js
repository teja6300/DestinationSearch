// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="location-image" />
      <p className="location-name">{name}</p>
    </li>
  )
}

export default DestinationItem
