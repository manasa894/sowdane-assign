import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineUpload} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="bg-navbar">
      <div className="mobile-nav-menu">
        <Link to="/">
          <button type="button" className="mobile-menu-btn">
            <BsHouseDoor className="mobile-menu-logo" />
          </button>
        </Link>

        <Link to="/posts/add">
          <button type="button" className="mobile-menu-btn">
            <AiOutlineUpload className="mobile-menu-logo" />
          </button>
        </Link>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={onClickLogout}
        >
          <FiLogOut className="mobile-menu-logo" />
        </button>
      </div>

      <div className="large-nav-menu">
        <Link to="/">
          <button type="button" className="large-nav-menu-btn">
            Feed
          </button>
        </Link>
        <Link to="/posts/add">
          <button type="button" className="large-nav-menu-btn">
            Create-Post
          </button>
        </Link>
      </div>
      <button
        type="button"
        className="large-logout-btn"
        onClick={onClickLogout}
      >
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
