import React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs'
import '../navbar/Navbar.css'

const MenuBar = () => (
  <MuiThemeProvider>
    <AppBar
      style={{
        backgroundColor: "white",
        height: "56px"
      }}
      iconElementLeft= {
        <div style={{paddingLeft: "100px"}}>
            <Tabs 
              tabItemContainerStyle={{width: '600px'}}
              inkBarStyle={{'backgroundColor': '#1da1f2'}}
              contentContainerStyle={{ color: "white" }}
              initialSelectedIndex="1"
            >
              <Tab label="Top"
                  className="navitem" 
              />
              <Tab label="Latest"
                  className="navitemFirst" 
              />
              <Tab label="People"
                  className="navitem" 
              />
              <Tab label="Photos"
                  className="navitem" 
              />
              <Tab label="Videos"
                  className="navitem" 
              />
              <Tab label="News"
                  className="navitem" 
              />
              <Tab label="Broadcasts"
                  className="navitem" 
              />
        </Tabs>
        </div>
    }
    />
  </MuiThemeProvider>
)

export default MenuBar