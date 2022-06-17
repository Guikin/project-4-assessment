import React, { Component } from 'react'
import CircleSelector from './CircleSelector'

export default class Circles extends Component {


      
  render() {

    return (
      <div className='App'>
      <div className='Circles'>
      { parseInt(this.props.selectedButton)===1 ? (<div className="selected"  value="1" onClick={(e)=>this.props.setButton(e.target)} > 1 </div>):(<div className='' value="1" onClick={(e)=>this.props.setButton(e.target)} > 1 </div>)  }
      { parseInt(this.props.selectedButton)===2 ? (<div className="selected"  value="2" onClick={(e)=>this.props.setButton(e.target)} > 2 </div>):(<div className='' value="2" onClick={(e)=>this.props.setButton(e.target)} > 2 </div>)  }

      { parseInt(this.props.selectedButton)===3 ? (<div className="selected"  value="3" onClick={(e)=>this.props.setButton(e.target)} > 3 </div>):(<div className='' value="3" onClick={(e)=>this.props.setButton(e.target)} > 3 </div>)  }

      { parseInt(this.props.selectedButton)===4 ? (<div className="selected"  value="4" onClick={(e)=>this.props.setButton(e.target)} > 4 </div>):(<div className='' value="4" onClick={(e)=>this.props.setButton(e.target)} > 4 </div>)  }
      </div>
      </div>
    )
  }
}
