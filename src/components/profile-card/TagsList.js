import React,{Component} from 'react'

export default class TagsList extends Component {
  render() {
    return (
      <div style={{ paddingTop: '5px'}}>
        <b style={{color: '#1da1f2', fontSize: '16px'}}>{this.props.title}</b>
        <div style={{fontSize: '13px', fontWeight: '300', paddingTop: '-5px'}}>{this.props.subtitle}</div>
      </div>
    )
  }
}