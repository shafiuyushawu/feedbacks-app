import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import Card from './shared/Card'
import FeedbackContext from './context/FeedbackContext'

function FeedBackItem({ text, rating, id }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card reverse>
      <div className="num-display" key={id}>
        {rating}
      </div>
      <button onClick={() => deleteFeedback(id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(text, rating, id)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display" key={id}>
        {text}
      </div>
    </Card>
  )
}

FeedBackItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default FeedBackItem
