import React, { Component } from "react";
import "./App2.css";

export class AddUser extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    

    render(){
        return (
            <div className = "wrapper">
                <div className = "form-wrapper">
                    <h1>Ajouter un autre membre à notre communauté</h1>
                    <form >


                        <div className = "submit">
                            <button
                            onClick={this.continue}
                            >Continuer</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }

}

export default AddUser;