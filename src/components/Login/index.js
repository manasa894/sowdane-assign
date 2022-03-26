import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    loginError: false,
    errMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginError = errMsg => {
    this.setState({loginError: true, errMessage: errMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'
    const userData = {username, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(url, option)

    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginError(data.error_msg)
    }
  }

  render() {
    const {username, password, loginError, errMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="bg-login-container">
        <div className="login-card">
          <img
            src="https://res.cloudinary.com/df7q6i5l1/image/upload/v1648213785/1519904165363_gb2rpb.jpg"
            alt="website logo"
            className="login-logo"
          />
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <label htmlFor="username" className="login-label">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="login-input"
              onChange={this.onChangeUsername}
              value={username}
            />
            <label htmlFor="password" className="login-label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={this.onChangePassword}
            />

            <button type="submit" className="login-btn">
              Login
            </button>
            {loginError ? <p className="login-err-msg">*{errMessage}</p> : null}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
