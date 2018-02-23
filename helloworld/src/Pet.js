import React,{Component} from 'react'
import HobbyList from './hobbyList'
import './App.css'
export default class Pet extends Component{
			render(){
				const hobbies=["Eating","Sleeping","more eating"]
				return (
					<div className="card">
						<h2 className="name">pet card</h2>
						<img src="https://yt3.ggpht.com/EdjnobpzppDl5pSVU2s2AUIiFS0qBfT8Jdodw-FHMhugJK5zmzWDLkpqDVtpnaLSP66M5F8nqINImLKGtQ=s900-mo-c-c0xffffffff-rj-k-no" alt="this is a card"/>
						<h5 style={{fontSize:'1.5em', margin:'2px'}}>Hoobies:</h5>
						<HobbyList hobbies={hobbies}/>
					</div>
				)
			}

		}
