import React from 'react'
import { Grid, Button, Typography,Link as Nv } from '@material-ui/core'
import { useNavigate } from "react-router-dom";


const Home=(props)=>{

    return(
        <div className="">
            {/* <h4 style={{textAlign:"left",marginLeft:"10px"}}>Welcome To Home : <span style={{color:"blue"}}>{usersss}</span></h4> */}
            <h2 style={{color:"green"}}>Welcome To Home Page </h2>
            <p>here I am { props.email } </p>
            <p>and my email is </p>
        </div>
    )
}

export default Home
