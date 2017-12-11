import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import './Navbar.css'
/* Navigation Bar*/
const Navbar = () => (
<nav>
    <MuiThemeProvider>
        <AppBar
        title={<img src="./imgs/logo.png" alt="Twitter Logo" height="25px" width="max-width"/>}
        titleStyle={{paddingLeft: '205px'}}
        style={{
        "backgroundColor": "white",
        "height": "56px"
        }}
        iconElementLeft= {
            <div style={{paddingLeft: "100px"}}>
                <Tabs 
                tabItemContainerStyle={{width: '400px'}}
                inkBarStyle={{'backgroundColor': '#1da1f2'}}
                contentContainerStyle={{ color: "white"}}
                >
                    <Tab label={
                            <FlatButton
                                label="Home"
                                className="navitemFirst"
                                icon={
                                    <i class="material-icons">home</i>
                                }
                            />
                        } 
                        className="navitem" 
                        data-route="/home"
                    />
                    <Tab label={
                        <FlatButton
                            label="Notifications"
                            className="navitem"                            
                            icon={
                                <i class="material-icons">notifications</i>
                            }
                        />
                    } 
                    className="navitem" 
                    data-route="/home"
                />                    
                    <Tab label={
                        <FlatButton
                            label="Messages"
                            className="navitem"                            
                            icon={
                                <i class="material-icons">message</i>
                            }
                        />
                    } 
                    className="navitem" 
                    data-route="/home"
                />   
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
                    <form method="get" action="/search">
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
                    </form>
                    <img 
                    src="./imgs/search.svg" 
                    height="15px" 
                    alt="Search Icon"
                    style={{
                        position: 'relative',
                        top: '-23px',
                        left: '-97px'
                    }}
                    />
                </div>

                <Avatar 
                src="imgs/profile.jpg"
                style={{
                    position: 'relative',
                    top: '-50px',
                    left: '-50px',
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