import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import blogOne from "../../images/blog1.jpg";
import blogTwo from "../../images/blog2.jpg";
import blogThree from "../../images/blog3.jpg";
import { useGlobalContext } from "../../context";
const News = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.team}>
      <Container className={classes.bigCont}>
        <Typography variant="h2" align="center">
          Meet Our Team
        </Typography>
        <Box className={classes.center}>
          <div className={classes.underline}></div>
        </Box>
        <Box className={classes.center}>
          <Typography variant="body1" align="center" className={classes.lorem}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            dolorem dicta libero veritatis reiciendis quis pariatur magni.
          </Typography>
        </Box>

        <Grid container className={classes.gridCont} spacing={4}>
          <Grid item className={classes.gridItem} lg={4}>
            <Box className={classes.gridBox}>
              <img src={blogOne} alt="bitcoin1" className={classes.img} />
              <Box className={classes.dateBox}>
                <Typography variant="h6" className={classes.date}>
                  30
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  className={classes.dateSpan}
                >
                  June
                </Typography>
              </Box>
              <Container>
                <Typography
                  variant="h5"
                  color="secondary"
                  style={{ marginTop: 30, fontWeight: "bold" }}
                >
                  Latest News Post
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary"
                  style={{ marginTop: 30, lineHeight: 1.5, fontSize: 17 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam consectetur cumque dolorum, ex incidunt ipsa
                  laudantium necessitatibus neque quae tempora.
                </Typography>
                <Button variant="contained" className={classes.btnCore}>
                  ReadMore
                </Button>
              </Container>
            </Box>
          </Grid>
          <Grid item className={classes.gridItem} lg={4}>
            <Box className={classes.gridBox}>
              <img src={blogTwo} alt="bitcoin1" className={classes.img} />
              <Box className={classes.dateBox}>
                <Typography variant="h6" className={classes.date}>
                  30
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  className={classes.dateSpan}
                >
                  June
                </Typography>
              </Box>
              <Container>
                <Typography
                  variant="h5"
                  color="secondary"
                  style={{ marginTop: 30, fontWeight: "bold" }}
                >
                  Latest News Post
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary"
                  style={{ marginTop: 30, lineHeight: 1.5, fontSize: 17 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam consectetur cumque dolorum, ex incidunt ipsa
                  laudantium necessitatibus neque quae tempora.
                </Typography>
                <Button variant="contained" className={classes.btnCore}>
                  ReadMore
                </Button>
              </Container>
            </Box>
          </Grid>
          <Grid item className={classes.gridItem} lg={4}>
            <Box className={classes.gridBox}>
              <img src={blogThree} alt="bitcoin1" className={classes.img} />
              <Box className={classes.dateBox}>
                <Typography variant="h6" className={classes.date}>
                  30
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  className={classes.dateSpan}
                >
                  June
                </Typography>
              </Box>
              <Container>
                <Typography
                  variant="h5"
                  color="secondary"
                  style={{ marginTop: 30, fontWeight: "bold" }}
                >
                  Latest News Post
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary"
                  style={{ marginTop: 30, lineHeight: 1.5, fontSize: 17 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam consectetur cumque dolorum, ex incidunt ipsa
                  laudantium necessitatibus neque quae tempora.
                </Typography>
                <Button variant="contained" className={classes.btnCore}>
                  ReadMore
                </Button>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default News;
