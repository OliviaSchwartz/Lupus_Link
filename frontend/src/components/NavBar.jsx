import {Link} from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {

    const authenticatedOptions = (
      <nav>
        <h3>Welcome!</h3>
        <Link to ='/about'>About</Link>
        <Link to='/trackers'>Symptom Tracker</Link>
        <Link to='/communityboard'>Community Board</Link>
        <Link to='/education'>Education</Link>
        <Link to= '/clinicaltrials'>Clinical Trials</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )


  const publicOptions = (
    <nav>
    <Link to="/">Home</Link>
    <Link to='/about'>About</Link>
    <Link to="/register">Register</Link>
    <Link to="/login">Sign In</Link>
    <Link to='/education'>Education</Link>
    </nav>
  )

  return (
    <header>
    <Link to="/">
    </Link>
    {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
)
}

export default Nav
