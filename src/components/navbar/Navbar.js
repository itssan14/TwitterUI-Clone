import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton';
import './Navbar.css'

const Navbar = () => (
<nav>
    <MuiThemeProvider>
        <AppBar
        title={<img src="./imgs/logo.png" alt="Twitter Logo" height="25px" width="max-width"/>}
        titleStyle={{ paddingLeft: '15%' }}
        style={{
            backgroundColor: "white",
            height: "56px"
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
                                    <i className="material-icons">home</i>
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
                                <i className="material-icons">notifications</i>
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
                                <i className="material-icons">message</i>
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
                <button 
                    style={{
                        float: 'right',
                        border: '0',                  
                        paddingLeft:  '15px',
                        borderRadius: '75px',
                        paddingRight: '15px',
                        paddingTop: '11px',
                        paddingBottom: '7px',
                        color: 'white',
                        backgroundColor: '#1da1f2'
                    }}
                >
                    <b>Tweet</b>
                </button>
                <div 
                    style={{
                        float: 'left',
                        paddingRight: '10px',
                        paddingTop: '5px'
                    }}
                >
                    <Avatar 
                        src="imgs/profile.jpg" 
                        size={30}
                    />
                    <div style={{ float: 'left', paddingRight: '3px'}}>
                        <form method="get" action="/search">
                            <input 
                                type="text"
                                placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search Twitter"
                                style={{
                                    border: '0px',
                                    borderRadius: '30px',
                                    paddingTop: '7px',
                                    paddingBottom: '7px',
                                    color: '#73818a',
                                    backgroundColor: 'rgb(245,248,250)',
                                }}
                            />
                        </form>
                    </div>
                </div>
            </div>
        }
        />
    </MuiThemeProvider>
</nav>
)

export default Navbar