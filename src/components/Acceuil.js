import React, { Component } from "react";
import UserForm from './UserForm'
import Succes from './Succes'
import AddUser from './AddUser'

export class Acceuil extends Component {
    componentDidMount(){
        document.title = "Test UAM React"
      }
    state = {
        step:1
    }

    //Next step to go to form
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };

    //Previous step to go to form
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };


    render(){
        const {step} = this.state;
        switch(step){
            
            case 1:
                return(
                    <AddUser
                        nextStep = {this.nextStep}
                    />
                )
            case 2:
                return(
                    <UserForm
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                    />
                )    
            case 3:
            return <Succes
                        prevStep = {this.prevStep}
                    />
            

        } 

    }
}

export default Acceuil
