"use client";
import { Box, Container, Typography } from "@mui/material";
import { blue, blueGrey, indigo, lightBlue } from "@mui/material/colors";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
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

  const [activePage, setActivePage] = useState(
    pages.find((page) => page.title === "Home")
  );

  return (
    <Box
      display={{ xs: "none", sm: "none", md: "block" }}
      bgcolor={"white"}
      onMouseLeave={() => {
        setActivePage(pages.find((page) => page.title === "Home"));
      }}
    >
      <Container>
        <nav>
          <Container>
            <Box display={"flex"}>
              {pages.map((page) => (
                <Box
                  key={page.id}
                  onMouseEnter={() =>
                    setActivePage(pages.find((e) => e.title === page.title))
                  }
                  p={1}
                  mr={4}
                  bgcolor={activePage.title === page.title && blueGrey[50]}
                  color={activePage.title === page.title && blue[900]}
                >
                  <Link href={"#"}>
                    <Typography className="nav-link">{page.title}</Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Container>
        </nav>
        <Box position={"relative"} zIndex={3}>
          <Box
            display={"flex"}
            overflow={"hidden"}
            bgcolor={blueGrey[50]}
            color={blue[900]}
            position={"absolute"}
            top={0}
            left={0}
            width={"100%"}
            className={
              activePage.subPages.length !== 0
                ? "open-nav-submenu"
                : "close-nav-submenu"
            }
          >
            {activePage.subPages.map((e, index) => (
              <Box
                key={index}
                m={2}
                p={1}
                sx={{ "&:hover": { bgcolor: indigo[800], color: "white" } }}
              >
                <Typography fontSize={"small"} sx={{ cursor: "pointer" }}>
                  {e}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
