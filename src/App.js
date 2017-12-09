import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Posts from './components/posts/Posts'
import SearchBar from './components/posts/SearchBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/><br/>
        <div style={{paddingLeft: '120px'}}>
          <SearchBar/><br />
          <Posts/>
        </div>
      </div>
    )
  }
}

