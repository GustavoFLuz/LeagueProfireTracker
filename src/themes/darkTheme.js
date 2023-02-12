import { background } from "../assets";
const theme = {
    name: "Dark",
    colors: {
        dark: "#FFF",
        light: "#000",
        primary: "#181818",
        secondary: "#222",
        tertiary: "#2c2c2c",
        goldenGradient: ["#8c7549", "#886700"],
        mastery: [
            null,
            '#a17b2c',
            '#a17b2c',
            '#a17b2c',
            '#a17b2c',
            '#841717',
            '#5f155a',
            '#0e504d'
        ],
        masteryProgress: "linear-gradient(90deg, #1d9d98 0%, #2be9e2 100%)",
        shadow: `-21px -21px 20px #0002`,
        containerBg: "repeating-linear-gradient(35deg,#1f1f1f 0%, #6b6b6b 50%, #1f1f1f 100%)",
        error: "#F55"
    },
    menuBackgroundImage: background,
    sizes:{
        navbarHeight: "3vh",
        minContainerHeight: "95vh"
    }
}
export default theme;