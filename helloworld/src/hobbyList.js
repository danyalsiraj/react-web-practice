import React,{Component} from 'react'

export default class HobbyList extends Component{
  render(){
    const liStyle={fontSize:'1em'}
    return (
      <ul>
        { this.props.hobbies.map((hobby,index)=>{
          return <li key= {index} style={liStyle}>{hobby}</li>
          })
        }
      </ul>
    )
  }
}
