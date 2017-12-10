import React,{Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TagsList from './TagsList'

export default class InfoCard extends Component {
  render() {
    return (
      <MuiThemeProvider>
            <Paper 
              style={{
                width: "300px",
                height: '400px'
              }}
            >
              <div style={{paddingLeft: '20px'}}>
                <br />
                <b style={{fontSize: '19px'}}>{this.props.CardHead}</b>&nbsp;&nbsp;
                <span style={{color: '#1da1f2', fontSize: '14px'}}>Change</span>
                <br />
                <TagsList title="#KalakkuMachaanMaking"/>
                <TagsList title="SetMaking" subtitle="20k Tweets"/>
                <TagsList title="MSDhoni" subtitle="50K Tweets"/>
                <TagsList title="#INDvsSL" subtitle="40K Tweets"/>
                <TagsList title=""/>
                <TagsList title="#Dhoni" subtitle="@ChennaiIPL is Tweeting about this"/>
                <TagsList title="Germany 2-1" subtitle="6294 Tweets"/>
                <TagsList title="DGCA"/>
                <TagsList title="#TEDTalksIndiaSoch" subtitle="20k Tweets"/>
                <TagsList title="#MustHaveDevTools"/>
              </div>             
            </Paper>
      </MuiThemeProvider>
    )
  }
}