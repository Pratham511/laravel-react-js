import React from "react";
import { Grid,AppBar,Toolbar,CssBaseline,Typography,Button } from "@material-ui/core";
import {  NavLink } from "react-router-dom";
import { useNavigate  } from "react-router-dom";


function Navbar() {

    // let email = '';
    // let auth = '';

    const navlinks = { marginLeft: "20px",display: "flex"};
    const logo ={ flexGrow: "1",cursor: "pointer"};
    const link = {textDecoration: "none",color: "white",fontSize: "20px",marginLeft: "20px",
                    hover: {
                        color: "yellow",
                        borderBottom: "1px solid white",
                    },
                };
    const navigate = useNavigate();
    // const { is_logged_in } = useParams();

    // const parse_data = JSON.parse(localStorage.getItem('is_logged_in'));
    // console.log(parse_data);

    // if(parse_data){
    //     email = parse_data.email;
    //     auth = parse_data.is_auth;
    // }

    const logout = () => {
        localStorage.removeItem('is_logged_in')
        navigate('/login');
    }

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" style={logo}>
        </Typography>
          <div style={navlinks}>
            <NavLink to="/" style={link}>
                Home
            </NavLink>
            <NavLink to="/about" style={link}>
                About
            </NavLink>
            <NavLink to="/contact" style={link}>
                Contact
            </NavLink>
            <NavLink to="/faq" style={link}>
                FAQ
            </NavLink>

                    <div style={{  float:"right",marginRight:"50px"}}>
                        <Button type='submit' onClick={logout} style={link} fullWidth>logout</Button>
                    </div>

          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
