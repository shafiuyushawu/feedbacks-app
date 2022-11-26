import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

const FeedBackStats = () => {
  const { feedbacks } = useContext(FeedbackContext)
  // calculate average
  let average =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedbacks.length

  return (
    <div className="feedback-stats ">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>
        Average Rating:{' '}
        {isNaN(average)
          ? 0
          : parseFloat(average)
              .toFixed(1)
              .replace(/[.,]0$/, '')}
      </h4>
    </div>
  )
}

export default FeedBackStats
