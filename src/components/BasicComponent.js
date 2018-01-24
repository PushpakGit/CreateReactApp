import React from 'react';
import './BasicComp.css';
class BasicComponent extends React.Component{  
    constructor(props){
        super(props);

        this.state = { placeholder:'Enter Something' , text:'' ,divText : ''}
    }


    onEnterClick (event) {
        this.setState({divText : this.state.text});
    }  
    

    render(){
        return (
            <div>
                <input placeholder={this.state.placeholder} value={this.state.text} onChange={event => this.setState({ text: event.target.value })} />
                <input className="defaultButton" value="Enter" type="button" onClick={this.onEnterClick.bind(this)} />
                <div>{this.state.divText}</div>
            </div>
        );
    }
}

export default BasicComponent;