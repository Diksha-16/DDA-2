// import React from "react";

// const mystyle={
//   position: "absolute",
//   textAlign: "center",
//   bottom: "0",
//   width: "100%",
//   color:"red",
//   height: "2.5rem"
// }
// function Footer() {
//   const year = new Date().getFullYear();
//   return (
//     <footer style={mystyle} >
//       <p>Copyright ⓒ {year}</p>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react';

// function Footer()  {
//   const year = new Date().getFullYear();
//   return(
// <footer className="footer">
// <p>Copyright ⓒ {year}</p>

// </footer>
// );
// }
// export default Footer;

import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 1, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Account
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Login/Register
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit"></Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center"  pt={{xs:5,sm:10}} pb={{xs:5,sm:0}}>
            Material Ui xyz &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
