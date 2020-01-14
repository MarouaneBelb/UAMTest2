import React, { Component } from "react";
import "./App2.css";

export class Succes extends Component {
    componentDidMount(){
        document.title = "Succes"
      }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        return (
            <div className = "wrapper">
                <div className = "form-wrapper">
                    <h1>Un autre membre a été ajouté par succes!</h1>
                    <form >


                        <div className = "back2">
                            <button
                            onClick={this.back}>retour</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }

}

export default Succes;