import { Text } from "@mantine/core";
import classes from "./AboutUs.module.css";
import { Container, MantineProvider } from "@mantine/core";
import { Parallax } from "react-parallax";
import CustomMotionDiv from "../../components/CustomMotion/CustomMotionDiv";

const AboutUs = () => {
  return (
    <CustomMotionDiv
      initial={{
        y: -100,
        x: 0,
        backgroundColor: [],
        opacity: 0,
      }}
      animate={{
        y: 0,
        x: 0,
        backgroundColor: [],
        opacity: 1,
      }}
      transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
    >
      <Parallax
        blur={2.5}
        bgImage={
          "https://images.unsplash.com/photo-1596699348952-d2b6e07a151d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        bgImageAlt="the dog"
        strength={-200}
      >
        <MantineProvider>
          <CustomMotionDiv
            initial={{
              y: -800,
              x: 0,
              backgroundColor: [],
              opacity: 0,
            }}
            animate={{
              y: 0,
              x: 0,
              backgroundColor: [],
              opacity: 1,
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}
          >
            <Container className={classes.responsiveContainer}>
              <Text size="sm" className={classes.description}>
                Established in January 2023, our dynamic hub supports YouTubers.
                Join our active Discord community for collaboration, gameplay,
                and connections. Beyond content consumption, we encourage active
                participation and camaraderie. It's a platform for YouTubers to
                grow and members to connect. Join us in celebrating gaming and
                content creation!
              </Text>
            </Container>
          </CustomMotionDiv>
        </MantineProvider>
      </Parallax>
    </CustomMotionDiv>
  );
};

export default AboutUs;
