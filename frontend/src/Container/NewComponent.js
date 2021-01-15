import React from 'react'

class NewComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
           name_display:'firstName'
        }
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReceiveProps(nextProps){
       console.log(nextProps)
       if(this.props.user_name!==nextProps.user_name){
           if(nextProps.user_name.indexOf(' '>-1)){
               this.setState({
                   name_display:'djebbi Siwar'
               })
           }
           else {
               this.setState({
                   name_display:'firstName'
               })
           }
       }
    }
    render(){
        const {user_name} =this.props
        const {name_display}=this.state
        console.log('this is the user : '+user_name)
        return(
            <div>
            {<span className='text-secondary'>{name_display}</span>}
             {user_name ? user_name : <h6>no user yet : non a props passed</h6>}
            </div>
        )
    }
}

export default NewComponent