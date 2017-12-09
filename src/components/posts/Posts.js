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
                />

                <Post 
                    UserName="Marques Brownlee" 
                    Tag="@mkbhd"
                    Img="mkbhd"
                    PostImg="pic1" 
                    content="Snowy weather snowy wheels"
                /><br/>

                <Post 
                    UserName="Marques Brownlee" 
                    Tag="@mkbhd"
                    Img="mkbhd"
                    PostImg="pic1" 
                    content="Snowy weather snowy wheels"
                /><br/>
            </div>

        )
    }
}