import React from 'react'

import NewComponent from './NewComponent'

class ReactLiveCycle extends React.Component {
  constructor(props) {
    super(props)
       this.state={
         user_name:'safwen',
         profession:'devlopper'
       }
  }
  
  handelChange =()=>{
  this.setState({
    user_name:'Siwar',
    profession:'kinée'
  },()=>{
  console.log( 'the new name is :' +this.state.user_name+ '  and work is :' +this.state.profession)
  })
  
  }
 componentDidUpdate(){
   console.log('changed')
 }
  render() {
      const {user_name,profession}=this.state  
    return (
      <div className='f-flex justify-content-center mt-2 pt-3'>
        <h2 className ="text-primary font-italic">{user_name}</h2>
        <h2 className ="text-primary font-italic">{profession}</h2>
        <NewComponent user_name={this.state.user_name}/>
        <button type="button" className='btn btn-danger' onClick={this.handelChange}>
        <NewComponent />
        </button>
         
        </div>

    )
  }
}
export default ReactLiveCycle