import React,{Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SuggestionProfile from './SuggestionProfile'
export default class WhoToFollow extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={{ display: 'inline'}}>
          <Paper style={{width: '300px'}}>
            <div style={{paddingLeft: '20px'}}>
              <br />
                <b style={{fontSize: '18px'}}>Who To Follow</b>&nbsp;&nbsp;
                <span style={{color: '#1da1f2', fontSize: '14px'}}>&nbsp;&nbsp;&nbsp;&nbsp;Refresh &nbsp;&nbsp;View All</span>
              <br /><br/>
              <SuggestionProfile image="2" title="The Rum Ham" Utag="TheRum..."/>
              <SuggestionProfile image="3" title="Chennai Weather" Utag="chenn..."/>
              <SuggestionProfile image="5" title="Lamborgini" Utag="Lamborg..."/>
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}