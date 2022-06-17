
import React, { Component } from 'react'

export default class CircleSelector extends Component {
         
  render(){

    return (
      <div className='CircleSelector'>

        {parseInt(this.props.selectedButton) ===1 ? (<button className="selected"  value="1" onClick={(e)=>this.props.setButton(e.target)} > Circle 1 Selected </button>):(<button className='' value="1" onClick={(e)=>this.props.setButton(e.target)} > Select Circle 1 </button>)  }

        { parseInt(this.props.selectedButton)===2 ? (<button className="selected"  value="2" onClick={(e)=>this.props.setButton(e.target)} > Circle 2 Selected </button>):(<button className='' value="2" onClick={(e)=>this.props.setButton(e.target)} > Select Circle 2 </button>)  }

        { parseInt(this.props.selectedButton)===3? (<button className="selected"  value="3" onClick={(e)=>this.props.setButton(e.target)} > Circle 3 Selectd </button>):(<button className='' value="3" onClick={(e)=>this.props.setButton(e.target)} > Select Circle 3 </button>)  }

        { parseInt(this.props.selectedButton)===4? (<button className="selected"  value="4" onClick={(e)=>this.props.setButton(e.target)} > Circle 4 selected </button>):(<button className='' value="4" onClick={(e)=>this.props.setButton(e.target)} > Select Circle 4 </button>)  }
        
       
      </div>

    )
  }
}

