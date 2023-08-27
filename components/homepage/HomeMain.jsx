"use client";
import { Box, Grid, Typography } from "@mui/material";
import { blue, indigo, lime } from "@mui/material/colors";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Link from "next/link";

const HomeMain = () => {
  const recentNews = [
    {
      id: 1,
      date: "August 15, 2023",
      title: "Imperial Announces $16.8 Million Private Placement",
    },
    {
      id: 2,
      date: "August 14, 2023",
      title:
        "Imperial Drilling Intersects 230.1 Metres Grading 0.31% Copper and 0.50 g/t Gold at Mount Polley",
    },
    {
      id: 3,
      date: "August 9, 2023",
      title: "Imperial Reports Second Quarter 2023 Financial Results",
    },
  ];

  const links = [
    "Red Chris Block Cave Pre-Feasibility Study",
    "Mount Polley Remediation Q&A",
    "Mount Polley Remediation Videos",
    "Mount Polley Website",
  ];
  return (
    <section>
      <Box pt={2} pb={5}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color={indigo[900]} mb={2}>
              Imperial Metals Corporation
            </Typography>
            <Typography mb={2}>
              is a Vancouver based mining company active in the acquisition,
              exploration, development, mining and production of base and
              precious metals. Our principal properties in British Columbia
              include the wholly owned Mount Polley and Huckleberry copper
              mines, a 30% interest in the Red Chris mine.
            </Typography>
            <Typography
              color={lime[900]}
              fontSize={"small"}
              sx={{ cursor: "pointer" }}
            >
              Subscribe here to receive news releases by email
            </Typography>
            <img
              src="/images/Annual-Production.jpg"
              alt="Annual Production"
              width={"100%"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color={indigo[900]} mb={2}>
              Recent News
            </Typography>
            {recentNews.map((e) => (
              <Link key={e.id} href={"#"}>
                <Box display={"flex"}>
                  <ArrowRightIcon />
                  <Typography>{e.date}</Typography>
                </Box>
                <Typography ml={3} color={blue[900]}>
                  {e.title}
                </Typography>
              </Link>
            ))}
            {links.map((link, index) => (
              <Link key={index} href={"#"}>
                <Box display={"flex"}>
                  <ArrowRightIcon />
                  <Typography color={lime[900]}>{link} </Typography>
                </Box>
              </Link>
            ))}
            <Box mt={2}>
              <img
                src="/images/Reserves-Resources.jpg"
                alt="Reserves Resources"
                width={"100%"}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/images/home-pg-projects-map2.jpg"
              alt="Projects Map"
              width={"100%"}
            />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default HomeMain;
