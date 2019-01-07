import React, { Component } from 'react';
import {connect} from 'react-redux';
class Counter extends Component {
    render(){
        return(
            <div>
                Your Age <span>{this.props.age}</span>
                <button onClick={this.props.onAgeUp}>Age Up</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        age:state.age
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onAgeUp: () => dispatch({type:"AGE_UP"}),
        onAgeDown: () => dispatch({type:"AGE-DOWN", value:1})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);