import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MUIThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './Post.css'

export default class Post extends Component {
  render() {
    let ProfImg = "imgs/" + this.props.Img + ".jpg"
    let PostImg = "imgs/" + this.props.PostImg + ".jpg"
    return (
      <div style={{ display: 'inline', paddingTop: '2px'}}>
        <MUIThemeProvider>
          <Card style={{ width: "600px"}}>
            <CardHeader
              title={
              <div>
                <b>{this.props.UserName}</b>&nbsp;&nbsp;
                <span style= {{ color: "#788895", fontWeight: "300"}}>
                  {this.props.Tag} &nbsp;{this.props.time}
                </span>
              </div>}
              avatar={ProfImg}
              subtitle={
              <div style={{ fontWeight: '300'}}>
                {this.props.content}
              </div>
              }
              subtitleStyle={{
                color:'black',
                paddingTop: '6px'
              }}
            />
            <CardMedia style={{ width: '550px', paddingLeft: '25px'}} >
              <img src={PostImg} alt="Preview"/>
            </CardMedia>
            <CardActions>
              <FlatButton icon={<i className="material-icons">comment</i>} />
              <FlatButton icon={<i className="material-icons">autorenew</i>} />
              <FlatButton icon={<i className="material-icons">favorite_border</i>} />
              <FlatButton icon={<i className="material-icons">email</i>} />
            </CardActions>
          </Card>
        </MUIThemeProvider>
      </div>
    )  
  }
}

