import React, { useState, useEffect } from 'react';
import * as yup from 'yup';



let Form = props => {

    
    const [formState, setFormState] = useState({ //Stores form data here
    
        name: '',
        email: '',
        password: '',
        terms: false
    
    });

    let submitClicked = event => { //func is invoked when you submit the form

        event.preventDefault()
    
        console.log('submitted!');
    
    }

    useEffect(() => {

        const formSchema = yup.object().shape({ //Schema for checking if form input is valid
            email: yup
                .string()
                .email("Must be a valid email address.")
                .required("Must include email address."),
            password: yup
                .string()
                .min(6, "Passwords must be at least 6 characters long.")
                .required("Password is Required"),
            terms: yup
                .boolean()
                .oneOf([true], "You must accept Terms and Conditions")
          });

        formSchema.isValid(formState).then(valid => { //Enables button if the input is valid

            document.querySelector('form button').disabled = !valid;

        })

    },[formState]) //^this runs when formState changes


    let onFormInput = event => { //Called when form has taken in input

        let checked = event.target.parentElement.parentElement.querySelector('.terms').checked;

        setFormState({

            ...formState,
            [event.target.name]: event.target.value, //merges the new values into formState
            terms: checked
            
        });

        console.log(formState);
    }

    return(

        <form onSubmit={event => submitClicked(event)}>

            <label>
                Name
                <input name='name' type='text' onChange={event => onFormInput(event)}></input>
            </label>

            <label>
                Email
                <input name='email' type='text' onChange={event => onFormInput(event)}></input>
            </label>

            <label>
                Password
                <input name='password' type='text' onChange={event => onFormInput(event)}></input>
            </label>

            <label>
                Accept Terms of Service
                <input className='terms' name='terms' type='checkbox' onChange={event => onFormInput(event)}></input>
            </label>

            <button disabled={true}>
                Submit
            </button>

        </form>

    )

}

export default Form;