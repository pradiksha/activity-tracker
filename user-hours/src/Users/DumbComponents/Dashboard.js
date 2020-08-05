import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import "./styles.css"


const headerList = ["Id", "Name"]

export default class Dashboard extends Component {
  render() {
    const { list, onEdit, onDelete } = this.props
    console.log("list: ", list)
    return (
      <div className="ml-10 mr-10">
        <table className="table mt-5 table-bordered text-center table-sm table-striped mx-auto">
          <thead className="table-header">
            <tr>
              {headerList.map(data => <th>{data}</th>)}
            </tr>
          </thead>
          <tbody className="table-body">
            {
              list.map(data => (
                <tr onClick={() => onEdit(data)}>
                  <td>{data.id}</td>
                  <td>{data.real_name}</td>

                  {/*<td>
                  <Button onClick={() => onEdit(data)} >Edit</Button>
                  <Button className="ml-1" onClick={() => onDelete(data.task)}>Delete</Button>
                </td>*/}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
