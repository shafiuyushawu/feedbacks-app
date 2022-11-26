import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedBackStats from './components/FeedBackStats'
import FeedBackList from './components/FeedBackList'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/Pages/AboutPage'
import { AboutIconLink } from './components/AboutIconLink'
import { FeedbackProvider } from './components/context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}
export default App
