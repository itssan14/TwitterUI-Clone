//Importing Packages For ReactJS
import React from 'react'
import {render} from 'react-snapshot'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import 'normalize-css'
import registerServiceWorker from './registerServiceWorker'
//Additional Imports 
import App from './App'
import ResultsPage from './Results'

const nomatch = () => (
  <div>
    <center>
      <b style={{fontSize: "50px"}}>404 Not Found!</b>
    </center>
  </div>
)
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/search" component={ResultsPage} />
      <Route component={nomatch} />
    </Switch>
  </BrowserRouter>
)
//Render Elements from React

render(<Router />, document.querySelector('#root'))
registerServiceWorker()
