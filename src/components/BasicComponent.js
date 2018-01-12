import React from 'react';
import './BasicComp.css';
class BasicComponent extends React.Component{  
    constructor(props){
        super(props);

        this.state = { placeholder:'Enter Something' , text:'' }
    }


    onEnterClick (event) {
        console.log(this.state, this.state.text);      
        //alert(event);
    }  
    

    render(){
        return (
            <div>
                <input placeholder={this.state.placeholder} onChange={event => this.setState({ text: event.target.value })} />
                <input className="defaultButton" value="Enter" type="button" onClick={this.onEnterClick()} />
                <div>{this.state.text}</div>
            </div>
        );
    }
}

export default BasicComponent;