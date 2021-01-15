import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {getInfo} from './Action/Jsondata'
import PropTypes from 'prop-types'

import NavBar from './Layout/NavBar'
import Select from 'react-select';
import { Table } from 'react-bootstrap'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabelData: [],
      selectedOption: ''
    }
  }
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  async componentDidMount(){
    console.log('component mounted')
    getInfo()
  }
  // async componentDidMount() {
  //   console.log('component Mounted')
  //   // try {
  //   //   const res = await fetch('http://www.json-generator.com/api/json/get/bVfYzPxrGW?indent=2', {
  //   //     method: 'GET'
  //   //   })
  //   //   const jsonResult = await res.json()
  //   //   if (jsonResult) {
  //   //     this.setState({
  //   //       tabelData: jsonResult
  //   //     }, () => {
  //   //       // console.log('le tableau remplis par :' +this.state.tabelData)
  //   //     })
  //   //   }
  //   //   // console.log('la reponce est : '+ jsonResult)
  //   // }
  //   // catch (err) {
  //   //   console.error(err.message)
  //   // }
  // }
  render() {
    // const { tabelData } = this.state    
    const {tab} = this.props.info
    console.log('this is tab of redux info :' + tab)
    const select = tab.map(item => {
      return { value: item.name, label: item.name }
    })
    const THead = (<thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Adress</th>
        <th>age</th>
        <th>email</th>
      </tr>
    </thead>)
    const tableauMaper = tab.map((item) => {
      if (this.state.selectedOption === '' || item.name === this.state.selectedOption.value) {
        return (
          <tbody key={item.id}>
            <tr>
              <td>{this.count++}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          </tbody>
        )
      }
    })

    return (
      <Fragment>
        <NavBar />
        <Select
          value={this.state.selectedOption.value}
          onChange={this.handleChange}
          options={select}
        />
        <div className='mt-4 pt-3 ml-3 mr-3'>
          <Table striped bordered hover size='sm'>
            {THead}
            {tableauMaper}
          </Table>
        </div>
      </Fragment>
    )
  }
}
App.propTypes={
  getInfo:PropTypes.func.isRequired,
  info:PropTypes.object.isRequired
}
const mapStateToProps = state =>({
  info:state.info
})
export default connect(mapStateToProps,getInfo)(App)