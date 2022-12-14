import {Link} from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut}) => {
  let authenticatedOptions
  if (user) {
     authenticatedOptions = (
      <nav className= "navbar">
        <div className="nav welcomenav">Welcome {user.email}!</div>
        <Link className="nav" to ='/about'>About</Link>
        <Link className="nav" to='/tracker'>Symptom Tracker</Link>
        <Link className="nav" to='/topics'>Community Board</Link>
        <Link className="nav" to='/education'>Education</Link>
        <Link className="nav"to= '/clinicaltrials'>Clinical Trials</Link>
        <Link className="nav" onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className= "navbar">
    <Link className="nav" to="/">Home</Link>
    <Link className="nav" to='/about'>About</Link>
    <Link className="nav" to="/register">Register</Link>
    <Link className="nav" to="/login">Sign-In</Link>
    <Link className="nav" to='/education'>Education</Link>
    </nav>
  )

  return (
    <header>
    <Link className="nav" to="/">
    </Link>
    {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
)
}

export default Nav
