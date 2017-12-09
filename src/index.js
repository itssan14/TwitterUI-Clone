//Importing Packages For ReactJS
import React from 'react'
import {render} from 'react-snapshot'
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize-css'
import registerServiceWorker from './registerServiceWorker'
//Additional Imports 
import App from './App'
import ResultsPage from './Results'
const Router = () => (
<BrowserRouter>
  <div>
    <Route path="/" component={App} />
    <Route path="/search" component={ResultsPage} />
  </div>
</BrowserRouter>
)
//Render Elements from React
render(<Router />, document.getElementById('root'))
registerServiceWorker()
