import React from 'react';

let submitClicked = event => {

    event.preventDefault();

    console.log('clicked submit!');

}

let Form = props => {

    return(

        <form>

            <label>
                Name
                <input type='text'></input>
            </label>

            <label>
                Email
                <input type='text'></input>
            </label>

            <label>
                Password
                <input type='text'></input>
            </label>

            <label>
                Read Terms of Service
                <input type='checkbox'></input>
            </label>

            <button onClick={event => { 
                
                submitClicked(event) 
                
            }}>
                Submit
            </button>

        </form>

    )

}

export default Form;