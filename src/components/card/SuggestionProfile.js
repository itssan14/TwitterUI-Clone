import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import './Suggestion.css'

export default class SuggestionProfile extends Component {
  render() {
    let ImgSrc = 'imgs/' + this.props.image + '.jpg'
    let Utag = '@'+ this.props.Utag
    let Uname = this.props.title
    return (
      <MuiThemeProvider>
        <div>
          <div style={{
            paddingTop: '10px'
          }}
          >
            <Avatar 
              size={30}
              src={ImgSrc}
            />
            
            <div style={{ position:'relative', top:'-35px', left: '40px'}}>
              <b>{Uname}</b>
              <span style={{ fontWeight: '100' ,fontSize: '13px',color: '#b1adab'}}>&nbsp;&nbsp;&nbsp;{Utag}</span>
              <span>&nbsp;&nbsp;&nbsp;x</span>
            </div>
            <div style={{ position: 'relative', top: '-25px', left: '40px'}}>
              <div className="roundButton">
                Follow
              </div>
            </div>
            <Divider />              
          </div>      
        </div>
      </MuiThemeProvider>
    )
  }
}