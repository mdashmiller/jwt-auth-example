import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Authorized } from './pages/Authorized'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/register'>Register</Link>
          </div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <div>
            <Link to='/authorized'>Authorized</Link>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/authorized" component={Authorized} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
