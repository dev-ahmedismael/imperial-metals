import { Box, Button, Container, Typography } from "@mui/material";
import { indigo, lime } from "@mui/material/colors";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavMenu from "../navbar/NavMenu";

const Header = () => {
  return (
    <header>
      <Container>
        <Box display={"flex"} justifyContent={"space-between"} py={2}>
          <Box>
            <img src="/images/logo.png" alt="Logo" />
          </Box>
          <Box
            display={{ xs: "none", sm: "none", md: "flex" }}
            alignItems={"center"}
          >
            <Typography variant="h5" color={indigo[900]}>
              TSX:III
            </Typography>
            <Typography variant="h5">$2.47</Typography>
          </Box>
          <Box display={{ xs: "flex", sm: "block", md: "none" }}>
            <NavMenu />
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
