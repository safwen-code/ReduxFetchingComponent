import React from 'react'
import { Table } from 'react-bootstrap'

class Tableau extends React.Component {
       constructor(props){
           super(props)
           this.count=1
       }
    render() {
        console.log(this.props)
        const {tableau} = this.props
        const THead= (<thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Adress</th>
                            <th>age</th>
                            <th>email</th>
                        </tr>
                    </thead>)
        const tableauMaper = tableau.forEach((item) => {

        console.log('la selectedOption est :'+ this.props.selectedOption)
        if(this.props.select === '' || item.name === this.props.select.value){
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
            <div className='mt-4 pt-3 ml-3 mr-3'>
                <Table striped bordered hover size='sm'>
                    {THead}
                    {tableauMaper}
                    </Table>
            </div>
        )
    }
}
export default Tableau