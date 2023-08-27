import { Box, Typography } from "@mui/material";
import React from "react";

const HomeHeader = () => {
  return (
    <section style={{ position: "relative", zIndex: 1 }}>
      <Box position={"relative"}>
        <img
          src="/images/home-page-header-photo-20200630.jpg"
          alt="Header"
          width={"100%"}
          height={300}
        />
        <Box position={"absolute"} left={20} bottom={20}>
          <Typography variant="h2" color="rgba(255, 255, 255, 0.7)">
            discover
          </Typography>
          <Typography variant="h2" color="rgba(255, 255, 255, 0.8)">
            develop
          </Typography>
          <Typography variant="h2" color="rgba(255, 255, 255, 1)">
            operate
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default HomeHeader;
