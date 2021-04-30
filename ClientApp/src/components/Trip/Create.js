import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
    name: "",
    description: "",
    dateStarted: "",
    dateCompleted: "",
    history:""

        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(e) {
        this.setState({
            [e.target.name]: e.target.value

        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value

        });
    }

    onChangeDateStarted(e) {
        this.setState({
            dateStarted: e.target.value

        });
    }

    onChangeDateCompleted(e) {
        this.setState({
            dateCompleted: e.target.value

        });
    }

    onSubmit(e) {
        e.preventDefault();
        const history = {};
        let tripObject = {

            Id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.state.dateStarted,
            dateCompleted: this.state.dateCompleted
        };
        axios.post("/trip/AddTrip", tripObject).then(result => {
            history.push("/trip");
        })
    }

render(){
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <h3>Add new Trip</h3>
                <label>Name:</label>
                <input type="text" value={this.state.name} onChange={this.state.onChangeName} /><br />
                <label>Description:</label>
                <input type="text" name="description" value={this.state.description} onChange={this.state.onChangeDescription} /><br />
                <label>Date Started:</label>
                <input type="text" name="startDate" value={this.state.dateStarted} onChange={this.state.onChangeDateStarted} /><br />
                <label>Date Completed:</label>
                <input type="text" name="endDate" value={this.state.dateCompleted} onChange={this.state.onChangeDateCompleted} /><br />
                <button>Submit</button>
            </form>

        </div>
        )
};

}

export default Create