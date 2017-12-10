import React,{Component} from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TagsList from './TagsList'

export default class InfoCard extends Component {
  render() {
    return (
      <MuiThemeProvider>
            <Paper 
              style={{
                width: "300px",
                height: '230px'
              }}
            >
              <div style={{paddingLeft: '20px'}}>
                <br />
                <b style={{fontSize: '19px'}}>{this.props.CardHead}</b>&nbsp;&nbsp;
                <span style={{color: '#1da1f2', fontSize: '14px'}}>Change</span>
                <br />
                <TagsList title="aishwaryarai"/>
                <TagsList title="rahulgandhi" />
                <TagsList title="googleassistant" />
                <TagsList title="indian express" />
                <TagsList title="jignesh mevani" />
                <TagsList title="Germany 2-1" />
                <TagsList title="DGCA"/>
              </div>             
            </Paper>
      </MuiThemeProvider>
    )
  }
}