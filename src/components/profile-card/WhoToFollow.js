import React,{Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class WhoToFollow extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={{ display: 'inline'}}>
          <Paper style={{width: '300px'}}>
            <div style={{paddingLeft: '20px'}}>
              <br />
                <b style={{fontSize: '18px'}}>Who To Follow</b>&nbsp;&nbsp;
                <span style={{color: '#1da1f2', fontSize: '14px'}}>Refresh    View All</span>
              <br />

            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}