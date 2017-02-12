import React from 'react';
import {Link} from 'react-router'

export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
                    <h1>Welcome to App</h1>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
        </div>);
    }
}