import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import FeedbackContext from './context/FeedbackContext'

function FeedBackList() {
  const { feedbacks } = useContext(FeedbackContext)
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FeedBackItem text={item.text} rating={item.rating} id={item.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    // <div className="feedback-list">
    //   {feedbacks.map((item) => (
    //     <FeedBackItem
    //       text={item.text}
    //       rating={item.rating}
    //       id={item.id}
    //       handleDelete={handleDelete}
    //     />
    //   ))}
    // </div>
  )
}

export default FeedBackList
