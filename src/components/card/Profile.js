import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'
import InfoCard from './InfoCard'

class ProfileCard extends Component { 
  render() {
    return (
      <MuiThemeProvider>
          <Paper style={{ width: "300px", height: '280px' }}>
            <div style={{height: '50%', backgroundColor: '#1DA1F2 '}}>
            </div>
            <div style={{ paddingLeft: '20px'}}>
              <Avatar 
                size= {60}
                style={{
                  position: "relative",
                  top: "-30px"
                }}
                src="./imgs/profile.jpg"
              />
              <div style={{position: 'relative', top: "-58px", left: "70px"}}>
                <div style={{ fontSize: '20px'}}>
                  <b>{this.props.UName}</b>
                </div>
                <div style={{ color: '#14171a', fontSize: '14px'}} >
                  {this.props.UTag}
                </div>
              </div>
              <div>
                <div style={{ position: 'relative', top: '-45px', paddingLeft: '10px' }}>
                  <b style={{ color: "#73818a", fontSize: '14px', paddingRight: '28px' }}>Tweets</b>
                  <b style={{ color: "#73818a", fontSize: '14px', paddingRight: '28px' }}>Following</b>
                  <b style={{ color: "#73818a", fontSize: '14px', paddingRight: '28px' }}>Followers</b><br />
                  <div style={{ paddingTop: '3px'}}>
                    <b style={{ color: "#1da1f2", fontSize: '19px', paddingRight: '28px', paddingLeft: "15px" }}>{this.props.Tweets}</b>
                    <b style={{ color: "#1da1f2", fontSize: '19px', paddingRight: '28px', paddingLeft: "25px" }}>{this.props.Followers}</b>
                    <b style={{ color: "#1da1f2", fontSize: '19px', paddingRight: '28px', paddingLeft: "25px" }}>{this.props.Following}</b>
                  </div>
                </div>
              </div>
            </div>
          </Paper><br/>
          <InfoCard CardHead="Trends for you"/>
      </MuiThemeProvider>
    )
  }
}

export default ProfileCard