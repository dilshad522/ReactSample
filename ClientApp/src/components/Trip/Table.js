import React, { Component } from 'react';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
      super(props);
      
    }  
      
    //DeleteTrip = () => {
    //    axios.delete('trip/DeleteTrip?id=' + this.props.Id)  
    //.then(json => {  
    //if(json.data.Status==='Delete'){  
    //alert('Record deleted successfully!!');  
    //}  
    //})  
    //}  
  render() {  
    return (  
        <tr>
            <td>
                {this.props.obj.id}
            </td>
            <td>
                {this.props.obj.name}
            </td>
            <td>
                {this.props.obj.description}
            </td>
            <td>
                {this.props.obj.dateStarted}
            </td>
            <td>
                {this.props.obj.dateCompleted}
            </td>
            <td>
                <Link to={"/edittrip/" + this.props.obj.id} className="btn btn-success">Edit</Link>
            </td>
            <td>
                <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>
            </td>
        </tr> 
    )  
  }  
}  
  
export default Table;