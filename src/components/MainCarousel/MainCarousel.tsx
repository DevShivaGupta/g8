import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";
import { IconBrandDiscord } from "@tabler/icons-react";
import { Paper, Text, Title, Flex } from "@mantine/core";
import classes from "../../pages/MainPage/MainPage.module.css";

interface CardProps {
  image: string;
  title: string;
  name: string;
  socials: any;
  i: number;
  mid: number;
  viewSlides: any;
}

function Card({ image, title, name, socials }: CardProps) {
  return (
    <Paper p="xl" radius="md" className={classes.caro_card}>
      <div className={classes.caro_wrapper}>
        <Paper
          shadow="lg"
          p="xl"
          className={classes.caro_logo_image}
          style={{ backgroundImage: `url(${image})` }}
        />
        <Text className={classes.caro_category} size="xs">
          {name}
        </Text>
        <Title order={3} className={classes.caro_title}>
          {title}
        </Title>
      </div>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <a href={socials.instagram} style={{ color: "#777" }} target="_blank">
          <IconBrandInstagram />
        </a>
        <a href={socials.discord} style={{ color: "#777" }} target="_blank">
          <IconBrandDiscord />
        </a>
        <a href={socials.youtube} style={{ color: "#777" }} target="_blank">
          <IconBrandYoutube />
        </a>
      </Flex>
    </Paper>
  );
}

export const MainCarousel = ({ CarouselSlides }: any) => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  });

  const Slides = CarouselSlides.map((item: any) => ({
    key: uuidv4(),
    content: <Card {...item} />,
  }));

  let slides = [...Slides].map((slide, index) => {
    return {
      ...slide,
      onClick: () => setState((prev) => ({ ...prev, goToSlide: index })),
    };
  });

  // const onChangeInput = (e: any) => {
  //   setState((prev) => ({
  //     ...prev,
  //     [e.target.name]: parseInt(e.target.value, 10) || 0,
  //   }));
  // };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </div>
  );
};
