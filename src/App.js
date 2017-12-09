import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Posts from './components/posts/Posts'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/><br/>
        <Posts/>
      </div>
    )
  }
}

