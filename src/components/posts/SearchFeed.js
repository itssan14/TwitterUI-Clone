import React, { Component } from 'react'
import Post from './Post'

export default class Posts extends Component {
    render() {
        return (
            <div style={{ display: 'inline'}}>
                
                <Post 
                    UserName="The Indian Express" 
                    Tag="@IndianExpress"
                    Img="express"
                    PostImg="news" 
                    content="Govt. extends deadline to link Aadhar with PAN"
                    time="Dec 7"
                />

                <Post 
                    UserName="The Indian Express" 
                    Tag="@IndianExpress"
                    Img="express"
                    PostImg="news" 
                    content="Govt. extends deadline to link Aadhar with PAN"
                    time="Dec 7"
                />

                <Post 
                    UserName="The Indian Express" 
                    Tag="@IndianExpress"
                    Img="express"
                    PostImg="news" 
                    content="Govt. extends deadline to link Aadhar with PAN"
                    time="Dec 7"
                />      
            </div>

        )
    }
}