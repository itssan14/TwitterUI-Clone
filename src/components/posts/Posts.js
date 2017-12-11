import React, { Component } from 'react'
import Post from './Post'

export default class Posts extends Component {
    render() {
        return (
            <div style={{ display: 'inline'}}>
                
                <Post 
                    UserName="Marques Brownlee" 
                    Tag="@mkbhd"
                    Img="mkbhd"
                    PostImg="pic1" 
                    content="Snowy weather snowy wheels"
                    time="42m"
                />

                <Post 
                    UserName="Narendra Modi" 
                    Tag="@narendramodi"
                    Img="namo"
                    PostImg="glimpses" 
                    content="Glimpses from today's rally in Nadiad "
                    time="2h"
                />

                <Post 
                    UserName="Mateus Zatorski" 
                    Tag="@matzatorski"
                    Img="mat"
                    PostImg="matpost" 
                    content="Here is how to get started with React app"
                    time="3m"
                />
            </div>

        )
    }
}