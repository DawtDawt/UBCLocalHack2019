import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

class Homepage extends React.Component {
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
                <div>
                    <h1>I am a...</h1>
                </div>
                <div>
                    <Link to="/login">
                        <Button variant={"primary"} size={"lg"} style={btnStyle}>Login</Button>
                    </Link>
                    <Link to="/signup">
                        <Button variant={"primary"} size={"lg"} style={btnStyle}>Sign Up</Button>
                    </Link>
                    <Link to="/maps">
                        <Button variant={"primary"} size={"lg"} style={btnStyle}>MAPS</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Homepage;