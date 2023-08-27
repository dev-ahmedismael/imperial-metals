import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}></Grid>
        </Grid>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          borderTop={"1px solid lightgray"}
          pt={1}
          pb={4}
        >
          <Typography fontSize={"small"}>
            Copyright © 2023 Imperial Metals All rights reserved.
          </Typography>

          <Typography fontSize={"small"}>
            Contact | Legal Notice | Privacy Statement
          </Typography>
          <Typography fontSize={"small"}>Developed by Ahmed Ismael </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
