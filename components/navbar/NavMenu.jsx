"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { blue, indigo, lime } from "@mui/material/colors";

const NavMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const pages = [
    {
      id: 1,
      title: "Home",
      subPages: [],
    },
    {
      id: 2,
      title: "Corporate",
      subPages: [
        "Company Overview",
        "Executive Officers",
        "Board of Directors",
        "Corporate Governance",
        "Commitments",
      ],
    },
    {
      id: 3,
      title: "Operations",
      subPages: [
        "Red Chris Mine",
        "Mount Polley Mine",
        "Huckleberry Mine",
        "Annual Mine Production",
        "Reserves & Resources",
      ],
    },
    {
      id: 4,
      title: "Exploration",
      subPages: ["Ruddock Creek Project", "Greenfield Projects"],
    },
    {
      id: 5,
      title: "Shareholders",
      subPages: [
        "News Releases",
        "Financial Reports & Filings",
        "AGM Proxy Materials",
        "Share Structure",
        "Transfer Agent",
        "Stock Price",
        "Analyst Coverage",
      ],
    },
    { id: 6, title: "Careers", subPages: ["Job Opportunities"] },
    { id: 7, title: "Contact", subPages: [] },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      height={"100%"}
      onClick={() => setIsMenuActive(!isMenuActive)}
    >
      <Button>
        <MenuIcon sx={{ color: "#716e79" }} />
      </Button>

      <Box position={"absolute"} zIndex={10} top={70} left={0} width={"100%"}>
        <Container>
          <Box
            className={isMenuActive ? "open-navmenu" : " close-navmenu"}
            mx={1}
            borderRadius={2}
            overflow={"hidden"}
            bgcolor={"#fff"}
          >
            {pages.map((page) => (
              <Box key={page.id} my={4}>
                <Container>
                  <Link href={"#"}>
                    <Typography
                      textAlign={"center"}
                      color={indigo[900]}
                      sx={{ "&:hover": { color: lime[900] } }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </Container>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NavMenu;
