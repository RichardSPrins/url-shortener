import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import * as React from 'react'
import HomeView from './Views/HomeView'
import SnipView from './Views/SnipView'

function App() {
  const [state, setState] = React.useState(null)
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(null)
  return (
    <Switch>
      <Route exact path="/">
        <HomeView state={state} setState={setState} success={success} setSuccess={setSuccess} />
      </Route>
      <Route path="/view/:id">
        <SnipView slug={state?.slug} />
      </Route>
    </Switch>
  )
}

export default App;
