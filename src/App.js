import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Posts from './components/posts/Posts'
import SearchBar from './components/posts/SearchBar'
import ProfileCard from './components/profile-card/Profile'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/><br/>
        <div style={{paddingLeft: '120px'}}>
          <ProfileCard UName="Sanjay" UTag="@itssan14" Tweets="20" Followers="500" Following="100" />
          <SearchBar/><br />
          <Posts/>
        </div>
      </div>
    )
  }
}

