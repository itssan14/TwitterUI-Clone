import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Posts from './components/posts/Posts'
import SearchBar from './components/posts/SearchBar'
import ProfileCard from './components/profile-card/Profile'
import WhoToFollow from './components/profile-card/WhoToFollow'
import './abc.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/><br/>         
          <div className="section group">
            <div className="col span_1_of_3">
              <ProfileCard UName="Sanjay" UTag="@itssan14" Tweets="20" Followers="500" Following="100" />
            </div>
            <div className="col span_2_of_3">
              <div style={{ display: 'inline'}}>  
              <SearchBar/>
              <Posts />
            </div>
            </div>
            <div className="col span_3_of_3">
                <WhoToFollow />
              </div>
          </div>
         
        </div>
    )
  }
}

