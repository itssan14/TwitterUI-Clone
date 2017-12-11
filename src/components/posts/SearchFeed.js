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
                    UserName="Realty Myths" 
                    Tag="@RealtyMyths"
                    Img="aadh2prof"
                    PostImg="aadh2" 
                    content="All the Govt. decisions that mattered with respect to property, Aadhar and more"
                    time="Dec 4"
                />

                <Post 
                    UserName="Ankit" 
                    Tag="@Ankitaker"
                    Img="aadh3"
                    PostImg="aadh3prof" 
                    content="Hrithik Roshan' s Aadhar Card pic is way more beautiful than other stars Twitter DP😛"
                    time="40m"
                />      
            </div>

        )
    }
}