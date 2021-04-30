////import React, { useState, useEffect } from "react";
////import axios from 'axios';

////function LoadingState() {
////    return (<p><em>Loading...</em></p>);
////}

////function ErrorState() {
////    return (<p><em>Error while fetching trip data!!</em></p>);
////}


////export default function Trips() {
////    const [state, setState] = useState({ trips: [], isLoading: true, error: false });
////    const { trips, isLoading, error } = state;

////    useEffect(() => {
////        axios.get("/trip").then(result => {
////            const response = result.data;
////            setState({ trips: response, isLoading: false });
////        }).catch(() => {
////            setState({ trips: [], isLoading: false, error: true });
////        });
////    }, []);

////    if (isLoading) {
////        return <LoadingState />;
////    }

////    if (error) {
////        return <ErrorState />;
////    }

////    return (
////        <div className="trip-content">
////            <h1>All Trips</h1>
////            <div>
////                <ul>
////                    <li>Add New Trip</li>
////                    <li>Update Trip</li>
////                    <li>Delete Trip</li>
                    
////                </ul>
////            </div>
////            <table className="table table-stripped">
////                <thead>
////                    <tr>
////                        <th>Name</th>
////                        <th>Description</th>
////                        <th>Date Started</th>
////                        <th>Date Completed</th>
////                    </tr>
////                </thead>
////                <tbody>
////                    {trips.map(trip =>
////                        <tr key={trip.id}>
////                            <td>{trip.name}</td>
////                            <td>{trip.description}</td>
////                            <td>{trip.dateStarted}</td>
////                            <td>{trip.dateCompleted}</td>
////                        </tr>
////                    )}
////                </tbody>
////            </table>
////        </div>
////    );

////}

//export class Trips extends React.Component {
//    constructor(props) {
//        super(props)
//        this.state = {
//            trips: [],
//            isLoading:false
//        }

//    }

//    componentDidMount() {
//        this.PopulateTripsData();
//    }

//    PopulateTripsData() {

//        axios.get("/trip").then(result => {
//            const response = result.data;
//            console.log(response);
//            this.setState({ trips: response, isLoading: false });
//        })

//        //const response = await fetch('trip');
//        //console.log(response);        
//        //this.setState({ trips: response, isLoading: false });
       
//    }


//    renderAllTrips(trips) {
//        return (
//            <table className="table table-stripped">
//                <thead>
//                    <tr>
//                        <th>Name</th>
//                        <th>Description</th>
//                        <th>Date Started</th>
//                        <th>Date Completed</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {trips.map(trip =>
//                        <tr key={trip.id}>
//                            <td>{trip.name}</td>
//                            <td>{trip.description}</td>
//                            <td>{trip.dateStarted}</td>
//                            <td>{trip.dateCompleted}</td>
//                        </tr>
//                    )}
//                </tbody>

//            </table>

//        );

//    }


//    render() {
//        let contents = this.state.isLoading
//            ? <p><em>Loading...</em></p>
//            : this.renderAllTrips(this.state.trips);

//        return (
//            <>
//                <h1>All Trips</h1>
//                {contents}
                
//            </>
//        );
//    }
//}

//export default Trips*/



import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';

export default class Trips extends Component {

    constructor(props) {
        super(props);
        this.state = { business: [] };
    }
    componentDidMount() {
        debugger;
        axios.get('/trip')
            .then(response => {
                this.setState({ business: response.data });
                debugger;

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.business.map(function (object, i) {
            return <Table obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h4 align="center">Trip List</h4>
                <table className="table table-striped" style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                               <th>Name</th>
                               <th>Description</th>
                               <th>Date Started</th>
                                <th>Date Completed</th>
                            <th colSpan="4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}  