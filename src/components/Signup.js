import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {vehicles: []};
    }

    render() {
        const btnStyle = {
            margin: "10px",
            width: "120px"
        };

        return (
            <div className="wrapper">
            
            <form>
            
            <label>
                Username: 
                <input type="text" name="fname"/> 
                </label><br></br>
            <label>
                Password: 
                <input type="text" name="lname"/></label><br></br>
            <input type="submit" value="Submit"></input>
            
            </form>
            </div>
        )
    }
}

export default Signup;