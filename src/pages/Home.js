import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className="home-container col">
      <div>
        <h2 className="logo">
          Manage Lupus, Live Better: Get Support and Track Your Symptoms with
        </h2>
        <h1 className="welcome-message">Lupus Link</h1>
        <section className="welcome-signin">
          <button onClick={() => navigate('/login')}>
            {' '}
            Click here to Log-In
          </button>
          <button onClick={() => navigate('/register')}>
            Click here to Register
          </button>
        </section>
      </div>
    </div>
  )
}

export default Home
