import classes from "./MainPage.module.css";
import { IconArrowDown } from "@tabler/icons-react";
import { HeroText } from "../../components/HeroText/HeroText";
import { MainCarousel } from "../../components/MainCarousel/MainCarousel";
import { Parallax } from "react-parallax";
import CustomMotionDiv from "../../components/CustomMotion/CustomMotionDiv";

const data = [
  {
    image:
      "https://cdn.discordapp.com/attachments/1064423840022802472/1177964817718464512/363889175_264934809605649_4996490725934406023_n.png?ex=65746c3a&is=6561f73a&hm=09cc80bc59e7b839981bbc86fa9c820a1048899691aa1e23557e326801f940d3&",
    title: "Vishal Mehtani",
    name: "Void M",
    socials: {
      instagram: "https://www.instagram.com/_art_arrow/",
      youtube: "https://www.youtube.com/@voidm1909",
      discord: "https://discord.gg/6HCU8sHMTs",
    },
  },
  {
    image:
      "https://cdn.discordapp.com/avatars/519819540264124446/d44add9b85e96715734269072ecae5ba.png?size=4096",
    title: "Vedant Joshi",
    name: "Xtreme",
    socials: {
      instagram: "https://www.instagram.com/xtremegameroffi",
      youtube: "https://www.youtube.com/@xtremegamerlive12",
      discord: "https://discord.gg/ud3nGAcMzw",
    },
  },
  {
    image:
      "https://cdn.discordapp.com/avatars/738611641025036320/05423db5e3eb1ddd64f71f2f70429cfd.png?size=4096",
    title: "Sumeet Adhke",
    name: "Dhruv",
    socials: {
      instagram: "https://www.instagram.com/sumeet_adke/",
      youtube: "https://www.youtube.com/@sumeetadkelive",
      discord: "https://discord.gg/6HCU8sHMTs",
    },
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1064423840022802472/1177965355637940266/40730682_538955139864746_7019336507223703552_n.png?ex=65746cba&is=6561f7ba&hm=04d5593667325a0c26cbd80f0f6cce2e42f7a4a6c680c2eb58a2d68e9b36605e&",
    title: "Vijay Mane",
    name: "VJX",
    socials: {
      instagram: "https://www.instagram.com/vjxgamer/",
      youtube: "https://www.youtube.com/channel/UCGLlOzQkWN03KJvqL6r4rSg",
      discord: "https://discord.gg/cbAf7nacSa",
    },
  },
  {
    image:
      "https://cdn.discordapp.com/avatars/562622197143961630/c6fc4e345970f1df55e16d481d46dac4.png?size=4096",
    title: "Subhendu Kumar",
    name: "AMBANI",
    socials: {
      instagram: "https://www.instagram.com/_void_m_/",
      youtube: "https://www.youtube.com/@voidm1909",
      discord: "https://discord.gg/6HCU8sHMTs",
    },
  },
];

const MainPage = () => {
  // const [selected, setSelected] = useState<any>(null);
  return (
    <div className={classes.main_page}>
      <div style={{ backgroundColor: "#d3d3d3" }}>
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
              "https://images.unsplash.com/photo-1604171256342-9945bfa74c4e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            bgImageAlt="the dog"
            strength={-200}
          >
            <HeroText />
            <div className={classes.scroll}>
              Scroll
              <IconArrowDown />
            </div>
          </Parallax>
        </CustomMotionDiv>
      </div>
      <div style={{ height: "94vh", padding: "6vh" }}>
        {/* <ParticlesBackground /> */}
        <div className={classes.inner_div + " " + classes.top}>
          <MainCarousel CarouselSlides={data} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
