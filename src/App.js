import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Posts from './components/posts/Posts'
import SearchBar from './components/posts/SearchBar'
import ProfileCard from './components/profile-card/Profile'
import WhoToFollow from './components/profile-card/WhoToFollow'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/><br/>
          <ProfileCard UName="Sanjay" UTag="@itssan14" Tweets="20" Followers="500" Following="100" />
          <div style={{ display: 'inline'}}>  
            <SearchBar/>
            <Posts />
          </div>
          <div style={{display: 'inline'}}>
            <WhoToFollow />
          </div>
        </div>
    )
  }
}

