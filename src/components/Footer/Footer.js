import { Box, Container, IconButton, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import BitCoinLogo from "../../images/BTC_Logo.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useGlobalContext } from "../../context";
const Footer = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Box className={classes.logoBox}>
          <Box className={classes.logo}>
            <img src={BitCoinLogo} alt="bitCoin" className={classes.img} />
            <Typography variant="h2">icon</Typography>
          </Box>
          <Typography
            variant="h6"
            style={{
              marginLeft: 10,
              fontSize: "16px",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            elementum mauris. Praesent vehicula gravida dolor.
          </Typography>
          <Box className={classes.socials}>
            <IconButton
              size="medium"
              style={{
                backgroundColor: dark ? "#fff" : "#222",
                color: dark ? "#222" : "#fff",
                marginLeft: 10,
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="medium"
              style={{
                backgroundColor: dark ? "#fff" : "#222",
                color: dark ? "#222" : "#fff",
                marginLeft: 10,
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              size="medium"
              style={{
                backgroundColor: dark ? "#fff" : "#222",
                color: dark ? "#222" : "#fff",
                marginLeft: 10,
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              size="medium"
              style={{
                backgroundColor: dark ? "#fff" : "#222",
                color: dark ? "#222" : "#fff",
                marginLeft: 10,
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              size="medium"
              style={{
                backgroundColor: dark ? "#fff" : "#222",
                color: dark ? "#222" : "#fff",
                marginLeft: 10,
              }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
