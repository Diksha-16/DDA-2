import React, { useState } from "react";
import {
  AppBar,
  Button,
  Drawer,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerComp from "./DrawerComp";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
const PAGES= ["AboutUs","Features","Courses","ContactUS"];

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const mystyle={
    color:"white",
    textDecoration:"none"
  }

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          <Typography sx={{ fontSize: "1.5rem", paddingLeft: "1%" }}>SHOPPEE</Typography>
          {isMatch ? (
            <>
              {/* <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>SHOPPEE</Typography> */}
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{marginLeft:"auto"}}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {
                    PAGES.map((page,index)=>(
                       <Link to={`/${page}`}>
                        <Tab key={index} label={page} style={{mystyle}}/>
                        </Link> 
                       
                    ))
                }
                
                {/* <Tab label="Services" />
                <Tab label="ContactUS" />
                <Tab label="About Us" /> */}
              </Tabs>
              <Link to="/Login" >
              <Button sx={{ marginLeft: "auto" }} variant="contained" >
                Login
              </Button>
              </Link>
              <Link to="/SignUp">
              <Button sx={{ marginLeft: "10px", textDecoration:'none' }} variant="contained" >
                SignUp
              </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
