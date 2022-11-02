import React from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {  Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

    const gridStyle ={margin:"100px auto"}
    const paperStyle = {padding:20,height:'50vh',width:280,margin:"30px auto"}
    const avatarStyle = {backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}

    const [user,setUser] = useState({
        email:"",
        password:""
    });

    const navigate = useNavigate();
    const {email,password} = user;

    const onInputChange = e => {
        setUser({...user,[e.target.name] : e.target.value})
    }

    const signIn = () => {
        axios.post("http://laravel-react-js.local/api/login",user)
        .then(response => {
            if(response.data.success == true && response.data.token){
                let email = response.data.credentials.email;

                const logged_in_user_data = {
                    email   : email,
                    is_auth : true
                }
                console.log('logged_in_user_data',logged_in_user_data);
                localStorage.setItem('is_logged_in',JSON.stringify(logged_in_user_data));
                navigate('/');
            }
        })
    }

    return (
        <Grid style={gridStyle}>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
                <h4 style={{color:"green"}}></h4>
            </Grid>
            <TextField label='Email'  name="email"  onChange={e => onInputChange(e)} placeholder='Enter Email' type='text' fullWidth required/>
            <TextField label='Password'  name="password"  onChange={e => onInputChange(e)} placeholder='Enter password' type='text' fullWidth required/>

            <Button type='submit' onClick={signIn} style={btnstyle} color='primary' variant="contained" fullWidth>Sign in</Button>

            <Typography > Don't Have Account ?
              <NavLink to="/Register">
                <span style={{marginLeft:"4px"}}>Sign-up</span>
              </NavLink>
            </Typography>
        </Paper>
        </Grid>
    );
}
export default Login;
