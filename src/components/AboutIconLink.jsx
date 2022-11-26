import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link
        to={{
          pathname: '/about',
          search: '?sort=name',
          hash: '#helo',
        }}>
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}
