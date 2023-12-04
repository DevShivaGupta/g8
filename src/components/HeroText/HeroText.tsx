import { Title, Text, Button, Container } from "@mantine/core";
import classes from "./HeroText.module.css";
import CustomMotionDiv from "../CustomMotion/CustomMotionDiv";

export function HeroText() {
  return (
    <Container className={classes.wrapper}>
      <div className={classes.inner}>
        <CustomMotionDiv
          initial={{
            y: 0,
            x: -300,
            backgroundColor: [],
            opacity: 0,
          }}
          animate={{
            y: 0,
            x: 0,
            backgroundColor: [],
            opacity: 1,
          }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          <Title className={classes.title}>
            <span className={classes.main_text}>W</span>
            <span className={classes.main_text}>e</span>
            <span className={classes.main_text}>l</span>
            <span className={classes.main_text}>c</span>
            <span className={classes.main_text}>o</span>
            <span className={classes.main_text}>m</span>
            <span className={classes.main_text}>e</span>{" "}
            <span className={classes.main_text}>t</span>
            <span className={classes.main_text}>o</span>
          </Title>
        </CustomMotionDiv>
        <br />
        <CustomMotionDiv
          initial={{
            y: 0,
            x: 1000,
            backgroundColor: [],
            opacity: 0,
          }}
          animate={{
            y: 0,
            x: 0,
            backgroundColor: [],
            opacity: 1,
          }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          <Title className={classes.title}>
            <Text className={classes.highlight}>
              Infinity
              <br />
            </Text>{" "}
          </Title>
        </CustomMotionDiv>
        <CustomMotionDiv
          initial={{
            y: 0,
            x: -500,
            backgroundColor: [],
            opacity: 0,
          }}
          animate={{
            y: 0,
            x: 0,
            backgroundColor: [],
            opacity: 1,
          }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          <Title className={classes.title}>
            <span className={classes.main_text_sec}>W</span>
            <span className={classes.main_text_sec}>h</span>
            <span className={classes.main_text_sec}>e</span>
            <span className={classes.main_text_sec}>r</span>
            <span className={classes.main_text_sec}>e</span>{" "}
            <span className={classes.main_text_sec}>G</span>
            <span className={classes.main_text_sec}>a</span>
            <span className={classes.main_text_sec}>m</span>
            <span className={classes.main_text_sec}>e</span>
            <span className={classes.main_text_sec}>r</span>
            <span className={classes.main_text_sec}>s</span>{" "}
            <span className={classes.main_text_sec}>U</span>
            <span className={classes.main_text_sec}>n</span>
            <span className={classes.main_text_sec}>i</span>
            <span className={classes.main_text_sec}>t</span>
            <span className={classes.main_text_sec}>e</span>
            <span className={classes.main_text_sec}>!</span>
          </Title>
        </CustomMotionDiv>
        <CustomMotionDiv
          initial={{
            y: 500,
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
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          <Container p={0}>
            <Text size="lg" className={classes.description}>
              ......a space where you and a select few friends can form a
              tight-knit gaming group.
            </Text>
          </Container>
        </CustomMotionDiv>
        <CustomMotionDiv
          initial={{
            y: 800,
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
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          <div className={classes.controls}>
            <Button
              className={classes.control}
              size="lg"
              variant="default"
              color="gray"
              onClick={() =>
                (window.location.href = "https://discord.gg/6HCU8sHMTs")
              }
            >
              Join Discord
            </Button>
            <Button className={classes.control} size="lg" color="#ba181b">
              Contact Us
            </Button>
          </div>
        </CustomMotionDiv>
      </div>
    </Container>
  );
}
