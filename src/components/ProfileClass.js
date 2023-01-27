import React from 'react'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                avatar_url: '',
                name: 'Dummy Name',
                location: 'Dummy Location',
                company: 'Dummy Company'
            }
        }
        // console.log('Child - constructor ' + props.name);
    }

    // Best place to make an API call 
    async componentDidMount(){
        /*
            console.log('Child - componentDidMount - ' + this.props.name)
            const data = await fetch('https://api.github.com/users/jitendramalan7')
            const json = await data.json()
            console.log(json)
            this.setState({
                userInfo: json
            });
        */

        // this.timer = setInterval(() => {
        //     console.log("NAMASTE REACT OP ");
        // }, 1000);
        console.log('Child - componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log('componentWillUnmount')
    }

    render() {
        console.log('Child - render - ' + this.props.name);
       return (
        <div>
            <h1>Profile Class Component</h1>
            <img src={this.state.userInfo.avatar_url} />
            <h2>Name: {this.state.userInfo.name}</h2>
            <h2>Location: {this.state.userInfo.location}</h2>
            <h2>Company: {this.state.userInfo.company}</h2>
        </div>
       )
    }
}

export default Profile;

/*
Render Phase:
    Parent Constructor
    Parent Render
        Child Contructor
        Child Render
Commit Phase:
        DOM is updated
        Child componentDidMount
    Parent componentDidMount
        Child API Call
        JSON is logged in console
        Child Render again
*/

/*
    Child Contructor
    Child Render
    Child componentDidMount
    
    API Call
    Set State

    <UPDATE CYCLE>
    Rerender
*/