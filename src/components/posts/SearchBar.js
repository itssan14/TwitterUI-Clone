import React from 'react'
import Avatar from 'material-ui/Avatar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'

const SearchBar = () => (
  <MuiThemeProvider>
    <Paper 
      style={{ 
        width: '600px', 
        height: '60px', 
        backgroundColor: '#E8F5FD' 
        }}
    >
      <Avatar 
        src="imgs/profile.jpg"
        size={35}
        style={{
          marginLeft: '27px',
          marginTop: '11px'
        }}
      />
      <input 
        type="text"
        style={{
          border: '0px', 
          borderRadius: '8px',
          position: 'relative', 
          left: '15px',top: '-11px', 
          paddingRight: '320px', 
          paddingTop: '9px',
          paddingBottom: '9px'
        }} 
      />
    </Paper>
  </MuiThemeProvider>
)

export default SearchBar