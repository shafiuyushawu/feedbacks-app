import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: 'This item is from context 1',
      rating: 1,
    },
    {
      id: 2,
      text: 'This item is from context 2',
      rating: 2,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    edit: false,
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedbacks([newFeedback, ...feedbacks])
  }
  //delelte feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id))
    }
  }


  // this will set items to be update
  const editFeedback = (text, rating) => {
    setFeedbackEdit({
      text,
      rating,
      edit: true,
    })
  }

  // Update feedback items
  const updateFeedback = (id, updItem) => {
    console.log(id, updItem)
    // setFeedbacks(feedbacks.map((item) => item.id === id ? {...rating, ...text} : {...item}))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
