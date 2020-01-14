import React, { Component } from "react";
import "./App2.css";


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const phoneRegex= RegExp(
    /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/
  );



  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };


export class UserForm extends Component {
    componentDidMount(){
        document.title = "Ajouter un nouveau membre"
      }
   // continue = e1 => {
    //    e1.preventDefault();
     //   this.props.nextStep();
    //}

    back = e1 => {
        e1.preventDefault();
        this.props.prevStep();
    }

    constructor (props){
        super(props);
        this.state = {
            lastName: null,
            firstName: null,
            email: null,
            mobilePhone: null,
            note: null,
            formErrors: {
                lastName: "",
                firstName: "",
                email: "",
                mobilePhone: "",
                note: "",
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)){
            this.props.nextStep();
            console.log(`
            --SUBMITTING--
            Nom: ${this.state.lastName}
            Prenom: ${this.state.firstName}
            Email:  ${this.state.email}
            mobilePhone: ${this.state.mobilePhone}
            Note: ${this.state.note}
            `
            )
        } else {
            alert("Registration impossible, veuillez corriger tes informations");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch(name){
            case "lastName":
                formErrors.lastName =
                    value.length < 3 
                        ? "Minimum 3 lettres" : "";
                break;
            
            case "firstName":
                formErrors.firstName =
                    value.length < 3 
                        ? "Minimum 3 lettres" : "";
                break;

            case "email":
                formErrors.email =
                    emailRegex.test(value)
                        ? '' : 
                        'Votre adresse email est invalide!';
                break;

            case "mobilePhone":
                formErrors.mobilePhone =
                    phoneRegex.test(value)
                        ? '' : 
                        'Votre numero de  télephone est invalide!';
                break;

            case "note":
                formErrors.note =
                    value.length < 20
                        ? "Veuillez nous dire un peu plus :-D" 
                        : "";
                break;

            default:
                break;
        }

        this.setState({formErrors, [name]: value}, () => console.log(this.state));
    }

    render(){
        const { formErrors } = this.state;
        return (
            <div className = "wrapper">
                <div className = "form-wrapper">
                    <h1>Ajouter un membre</h1>
                    <form onSubmit={this.handleSubmit} noValidate>

                        

                        <div className = "lastName">
                            <label htmlFor ="lastName">Nom</label>
                            <input 
                                type="text" 
                                required="required"
                                className={formErrors.lastName.length > 0 ? "error" : null} 
                                placeholder="Saisir votre nom "  
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}></input>
                                {formErrors.lastName.length > 0 && (
                                     <span className="errorMessage">{formErrors.lastName}</span>
                                     
                                )}
                        </div>
                        
                        <div className = "firstName">
                            <label htmlFor ="firstName">Prénom</label>
                            <input 
                                type="text" 
                                className={formErrors.firstName.length > 0 ? "error" : null} 
                                placeholder="Saisir votre prénom" 
                                name="firstName"
                                noValidate
                                onChange={this.handleChange}></input>
                                {formErrors.firstName.length > 0 && (
                                     <span className="errorMessage">{formErrors.firstName}</span>
                                )}
                        </div>

                        <div className = "email">
                            <label htmlFor ="email">Email</label>
                            <input 
                                type="email" 
                                className={formErrors.email.length > 0 ? "error" : null}
                                placeholder="Ex:abc@gmail.com" 
                                name="email"
                                noValidate
                                onChange={this.handleChange}></input>
                                {formErrors.email.length > 0 && (
                                     <span className="errorMessage">{formErrors.email}</span>
                                )}
                        </div>

                        <div className = "mobilePhone">
                            <label htmlFor ="mobilePhone">Mobile Phone</label>
                            <input 
                                type="text" 
                                className={formErrors.mobilePhone.length > 0 ? "error" : null} 
                                placeholder="Ex:+212674266335" 
                                name="mobilePhone"
                                noValidate
                                onChange={this.handleChange}></input>
                                {formErrors.mobilePhone.length > 0 && (
                                     <span className="errorMessage">{formErrors.mobilePhone}</span>
                                )}
                              
                        </div>

                        <div className = "note">
                            <label htmlFor ="note">Notes</label>
                            <textarea
                                type="text" 
                                className={formErrors.note.length > 0 ? "error" : null}  
                                placeholder="Voulez vous écrire quelque chose?" 
                                name="note"
                                noValidate
                                onChange={this.handleChange}></textarea>
                                {formErrors.note.length > 0 && (
                                     <span className="errorMessage">{formErrors.note}</span>
                                )}
                        </div>

                        <div className = "submit">
                            <button type = "submit"
                            onClick={this.continue}
                            >Enregistrer</button>
                        </div>

                        <div className = "cancel">
                            <button type = "reset">Annuler</button>
                        </div>

                        <div className = "back">
                            <button 
                            onClick={this.back}
                            >--</button>
                        </div>

                    </form>
                </div>
            </div>
        )

        } 

    }


export default UserForm