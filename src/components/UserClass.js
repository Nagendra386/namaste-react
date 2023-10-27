import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={userInfo:{
            name:"dummy",
            location:"dehradun",
            avatar_url:"dummy",

        }};
        console.log("userclass cons");
    }
   async componentDidMount(){
        console.log("userclass mount")
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        });
    }

    componentDidUpdate(){
        console.log("component is updated")
    }
    componentWillUnmount(){
        console.log("component unmounted");
    }
    render()
    {
        console.log("userclass render")
        // const{name,location}=this.props;
        // const{count,count2}=this.state;
        const{name,location,avatar_url}=this.state.userInfo;
        // debugger;
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h1>Name:{name}</h1>
                <h1>location:{location}</h1>
                <h2></h2>
                <h2>Contact:Nag386@gmail.com</h2>
            </div>
        )
    }
}

export default UserClass;