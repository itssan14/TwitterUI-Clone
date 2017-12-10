import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MUIThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Post extends Component {
  render() {
    let ProfImg = "imgs/" + this.props.Img + ".jpg"
    let PostImg = "imgs/" + this.props.PostImg + ".jpg"
    return (
      <div style={{ display: 'block'}}>
        <MUIThemeProvider>
          <Card style={{ width: "600px"}}>
            <CardHeader
              title={
              <div>
                <b>{this.props.UserName}</b>&nbsp;&nbsp;
                <span style= {{ color: "#788895"}}>
                  {this.props.Tag}&nbsp;&nbsp;&nbsp;&nbsp;{this.props.time}
                </span>
              </div>}
              avatar={ProfImg}
              subtitle={
              <div>
                {this.props.content}
              </div>
              }
              subtitleStyle={{
                color:'black',
                paddingTop: '6px'
              }}
            />
            <CardMedia>
              <img src={PostImg} alt="Preview" style={{ maxHeight: '400px'}}/>
            </CardMedia>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </MUIThemeProvider>
      </div>
    )  
  }
}

