import {Switch, Route} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import Home from './components/Home'
import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/registration" component={RegistrationForm} />
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />

    <Route component={NotFound} />
  </Switch>
)

export default App
