import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {  NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Register =() =>{
    const gridStyle = {margin:"100px auto"}
    const paperStyle = {padding :20,height:'65vh',width:280, margin:"20px auto"}
    const avatarStyle = {backgroundColor:'#3370bd'}
    const btnstyle = {margin:'8px 0'}
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
    });
    const [errors,setErrors] = useState('');

    const navigate = useNavigate();

    const {name,email,password,phone} = user;

    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value});
    };

async function signup(){
    let result = await axios.post("http://laravel-react-js.local/api/register",user);
    console.log('r',result);
    setUser({name:"",email:"",password:"",phone:""})
    navigate('/');

}

    return(
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                    <h3 style={{color:"green"}}></h3>
                </Grid>

                <TextField label='Name' name="name" placeholder='Enter Name' type='text' onChange={e => onInputChange(e)} fullWidth required/>
                <TextField label='Email'  name="email" placeholder='Enter Email' type='text' onChange={e => onInputChange(e)} fullWidth required/>
                <TextField label='Phone'  name="phone" placeholder='Enter phone' type='text' onChange={e => onInputChange(e)} fullWidth required/>
                <TextField label='Password'  name="password" placeholder='Enter password' type='text' onChange={e => onInputChange(e)} fullWidth required/>

                <Button type='submit' color='primary' onClick={signup} variant="contained" style={btnstyle} fullWidth>Sign-up</Button>

                <Typography>Click Here for
                   <NavLink to="/login">
                       <span style={{marginLeft:"4px"}}>Login</span>
                  </NavLink>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Register
