import React, {Component} from 'react'
import Navbar from './components/navbar/Navbar'
import InfoCard from './components/card/SearchResults'
import Posts from './components/posts/SearchFeed'
import WhoToFollow from './components/card/WhoToFollow'

export default class ResultsPage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{
          height: '100px', 
          backgroundColor: '#1DA1F2'
          }}
        ><br />
          <b style={{ paddingLeft: '126px', fontSize: '35px', color: 'white'}}> aadhar</b>
        </div>         
        <div className="section group">
          <div className="col span_1_of_3">
            <InfoCard CardHead="Trends for you"/><br/>
            <WhoToFollow />
          </div>
          <div className="col span_2_of_3">
            <div style={{ display: 'inline'}}>  
            <Posts />
            </div>
          </div>
        </div>
      </div>
    )
  }
}