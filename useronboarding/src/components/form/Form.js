import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';



let Form = props => {

    //State 

    const [formState, setFormState] = useState({ //Stores form data here
    
        name: '',
        email: '',
        password: '',
        terms: false
    
    });

    const [inputErrors, setInputErrors] = useState({ //State for form input validation errors
        email: "",
        password: "",
        terms: ""
      });

      //Input validation schema using Yup

      const formSchema = yup.object().shape({
        name: yup
            .string()
            .min(1, "Type your name")
            .required("Name is Required"),
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


    //Callback functions


    let submitClicked = event => { 

        event.preventDefault()

        axios
            .post('https://reqres.in/api/users', formState)
            .then(response => {

                console.log(response.data);

            })
            .catch(err => {

                console.log(err);

            });

    }

    

    let onFormInput = event => {

        let checked = event.target.parentElement.parentElement.querySelector('.terms').checked;

        //Sets inputErrors state if invalid input

        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {

                setInputErrors({

                    ...inputErrors,
                    [event.target.name]: ''

                });

            })
            .catch(err => {

                setInputErrors({

                    ...inputErrors,
                    [event.target.name]: err.errors[0]

                });

            })

        //Sets form state

        setFormState({

            ...formState,
            [event.target.name]: event.target.value,
            terms: checked
            
        });

        event.persist()

    }


    useEffect(() => {

        const formSchema = yup.object().shape({ //Had to copy schema into here for it to work
            name: yup
                .string()
                .min(1, "Type your name")
                .required("Name is Required"),
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

    },[formState]) //runs when formState changes


    return(

        <form onSubmit={event => submitClicked(event)}>

            <label>

                Name

                <input 
                name='name' 
                type='text' 
                value={formState.name}
                onChange={event => onFormInput(event)}>
                </input>

            </label>

            <label>

                Email

                <input name='email' 
                type='text' 
                value={formState.email} 
                onChange={event => onFormInput(event)}>
                </input>

            </label>

            <label>

                Password

                <input 
                name='password' 
                type='text' 
                value={formState.password} 
                onChange={event => onFormInput(event)}>
                </input>

            </label>

            <label>

                Accept Terms of Service

                <input 
                className='terms' 
                name='terms' 
                type='checkbox' 
                onChange={event => onFormInput(event)}>
                </input>

            </label>

            <button disabled={true}>
                Submit
            </button>

            <div>

                <h2>{inputErrors.name}</h2>
                <h2>{inputErrors.email}</h2>
                <h2>{inputErrors.password}</h2>

            </div>

        </form>

    )

}

export default Form;