import {useState} from "react";
import React from "react";

class User extends React.Component{
    constructor(props){
        super(props)
        // console.log("user cons");
    }
    componentDidMount(){
        // console.log("user mount")
    }
    render(){
        // console.log("user render");
        return(
            <div className="user-card">
                <h1>count=</h1>
                <button onClick={()=>{
                   
                }}>Increment Value</button>
                <h2>Location:Rjy</h2>
                <h2>Contact:Nag386@gmail.com</h2>
            </div>
        )
    }
}



export default User;