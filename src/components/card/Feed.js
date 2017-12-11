import React from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Feed = () => (
  <MuiThemeProvider>
    <div style={{ display: 'inline'}}>
      <Paper style={{ width: '300px', height: '42px'}}>
        <div style={{ paddingTop: '10px', paddingLeft: '20px'}}>
          <b style={{fontSize: '18px'}}>Search filters</b>
        </div>
      </Paper>
    </div>
  </MuiThemeProvider>
)

export default Feed