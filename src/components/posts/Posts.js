import React, { Component } from 'react'
import Post from './Post'

export default class Posts extends Component {
    render() {
        return (
            <div style={{}}>
                
                <Post 
                    UserName="Marques Brownlee" 
                    Tag="@mkbhd"
                    Img="mkbhd"
                    PostImg="pic1" 
                    content="Snowy weather snowy wheels"
                    time="42m"
                /><br/>

                <Post 
                    UserName="Marques Brownlee" 
                    Tag="@mkbhd"
                    Img="mkbhd"
                    PostImg="pic1" 
                    content="Snowy weather snowy wheels"
                    time="2h"
                /><br/>

                <Post 
                    UserName="Marques Brownlee" 
                    Tag="@mkbhd"
                    Img="mkbhd"
                    PostImg="pic1" 
                    content="Snowy weather snowy wheels"
                    time="3h"
                /><br/>
            </div>

        )
    }
}