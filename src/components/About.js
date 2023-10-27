import User from "./User";
import UserClass from "./UserClass";
import React from "react"

class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("parent constrcuctor")
        this.state={};
    }
    componentDidMount(){
        // console.log("parent did mount")
    };
    render()
    {
        // console.log("parent render")
        return (
            <div>
                <h1>About us</h1>
                <h1>About Namaste react</h1>
                <User name={"nagendra function"}/>
                <UserClass name={"nagendra class"} location={"rajahmundry"}/>
            </div>
        )
    }
}

export default About;