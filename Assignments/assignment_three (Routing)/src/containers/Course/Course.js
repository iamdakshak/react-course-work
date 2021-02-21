import React, { Component } from 'react';

class Course extends Component {
    state = {courseTitle : '' };
    componentDidMount(){
        this.parseQueryParams();
    }
    componentDidUpdate(){
        console.log(this.props);
        this.parseQueryParams();
    }
    parseQueryParams () {
        const query = new URLSearchParams(this.props.location.search);
        for(let param of query.entries()){
            //console.log(params); to check for params and find title in array
            if(this.state.courseTitle !== param[1]){
                this.setState({courseTitle: param[1]});
            }
        }
    }
    render () {
        return (
            <div>
                <h1>Title : {this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId} </p>
            </div>
        );
    }
}

export default Course;