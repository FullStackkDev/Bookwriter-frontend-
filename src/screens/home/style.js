// styles.js
import bgImage from "../../asset/1.jpg";

export const styles = {
  containerStyles: {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  backgroundImageStyles: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    filter: "blur(8px)",
    webkitFilter: "blur(8px)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  badgeStyles: {
    variant: "standard",
    color: "info",
    container: true,
    mb: 2,
  },
  gridStyles: {
    textAlign: "center",
    my: 6,
    mx: "auto",
    px: 0.75,
  },
};
