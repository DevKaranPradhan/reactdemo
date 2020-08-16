import React, { useReducer } from 'react';
import LoginComponent from '../components/LoginComponent';
import * as yup from "yup";
import apiHelper from '../apis/apiHelper'
import loginReducer from '../reducers/loginReducer'

const initialState = {
    username: '',
    password: '',
    usernameError: null,
    passwordError: null
}

const LoginContainer = () => {
    const [state, dispatch] = useReducer(loginReducer, initialState)

    let {username, password, usernameError, passwordError} = state

    const logValues = () => {
        console.log(username)
        console.log(password)
    }

    const schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().min(8).required(),
    });
    
    const validateData = () => {
        dispatch({type: 'reset-errors'});
        schema.validate({username, password}, { abortEarly: false })
        .then(() => {
            apiHelper('post', 'https://api.taiga.io/api/v1/auth', {username, password, type: 'normal'}).then((response) => {
                console.log(response)
            })
        })
        .catch((err) => {
            err.inner.forEach((ele) => {
                dispatch({type: 'field', field: `${ele.path}Error`, value: ele.message});
            });
        });
    }

    return(
        <LoginComponent
            validateData={validateData} 
            state={state}
            dispatch={dispatch}
        />
    )
}

export default LoginContainer;