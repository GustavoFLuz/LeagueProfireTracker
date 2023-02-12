import { background } from "../assets";
const theme = {
    name: "Default",
    colors: {
        dark: "#0d1b2a",
        light: "#e0e1dd",
        primary: "#778da9",
        secondary: "#415a77",
        tertiary: "#1b263b",
        goldenGradient: ["#f0cc84", "#5e400e"],
        mastery: [
            null,
            'linear-gradient(145deg, #9b7422, #f1ddb2)',
            'linear-gradient(145deg, #9b7422, #f1ddb2)',
            'linear-gradient(145deg, #9b7422, #f1ddb2)',
            'linear-gradient(145deg, #9b7422, #f1ddb2)',
            'linear-gradient(145deg, #770808, #e78b8b)',
            'linear-gradient(145deg, #850e7b, #fdb3f7)',
            'linear-gradient(145deg, #0c918c, #a4faf7)'
        ],
        masteryProgress: "linear-gradient(90deg, #046088 0%, #37a1a7 100%)",
        shadow: `-21px -21px 20px #0002`,
        containerBg: "repeating-linear-gradient(35deg,#1D1D1D 0%, #AAA 50%, #1D1D1D 100%)",
        error: "#F55"
    },
    menuBackgroundImage: background,
    sizes:{
        navbarHeight: "3vh",
        minContainerHeight: "95vh"
    }
}
export default theme;