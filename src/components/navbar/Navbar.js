import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import Avatar from 'material-ui/Avatar'
import './Navbar.css'
/* Navigation Bar*/
const Navbar = () => (
<nav>
    <MuiThemeProvider>
        <AppBar
        title={<img src="./imgs/logo.png" alt="Twitter Logo" height="25px" width="max-width"/>}
        titleStyle={{paddingLeft: '320px'}}
        style={{
        "backgroundColor": "white",
        "height": "56px"
        }}
        iconElementLeft= {
            <div style={{paddingLeft: "100px"}}>
                <Tabs 
                tabItemContainerStyle={{width: '300px'}}
                inkBarStyle={{'backgroundColor': '#1da1f2'}}
                contentContainerStyle={{ color: "white"}}
                >
                    <Tab label="Home" className="navitem" data-route="/home"/>
                    <Tab label="Notifications" className="navitem" data-route="/notifications"/>
                    <Tab label="Messages" className="navitem" data-route="/messages"/>
                </Tabs>
            </div>
        }
        iconElementRight= {
            <div style={{paddingRight: '140px'}}>

                <div style={{paddingTop : '7px'}}>
                    <button 
                    style={{
                        float: 'right',
                        border: '0',                  
                        borderRadius: '75px',
                        paddingLeft:  '15px',
                        paddingRight: '15px',
                        paddingTop: '7px',
                        paddingBottom: '7px',
                        color: 'white',
                        backgroundColor: '#1da1f2'
                    }}
                    >
                    <b>Tweet</b>
                    </button>
                </div>

                <div>
                    <input 
                    type="text"
                    placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search Twitter"
                    style={{
                        border: '0px',
                        borderRadius: '30px',
                        position: 'absolute',
                        left: '1045px',
                        paddingTop: '7px',
                        paddingBottom: '7px',
                        color: '#73818a',
                        backgroundColor: 'rgb(245,248,250)',
                    }}
                    />
                    <img 
                    src="./imgs/search.svg" 
                    height="15px" 
                    alt="Search Icon"
                    style={{
                        position: 'absolute',
                        left: '1220px',
                        paddingTop: '9px'
                    }}
                    />
                </div>

                <Avatar 
                src="imgs/profile.jpg"
                style={{
                    position: 'absolute',
                    left: '1253px',
                    paddingTop: '2px'
                }} 
                size={30}
                />
            </div>
        }
        />
    </MuiThemeProvider>
</nav>
)

export default Navbar