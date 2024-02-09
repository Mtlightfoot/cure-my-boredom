import * as React from "react";
import Typography from "@mui/material/Typography";

const style = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#0C0A3E",
  color: "white",
};

function Footer() {
  const linkStyle = {
    textAlign: "center",
    padding: "20px",
    color: "white",
    textDecoration: "none",
    "&: hover": {
      curser: "pointer",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  };
  return (
    <div>
      <Typography variant="h6" style={style}>
        This website was created by the Boredom Busters team: Amaal, Azza,
        Lotanna, and Matthew. Check out our GitHub repo:
        <a
          href="https://github.com/Mtlightfoot/cure-my-boredom"
          style={linkStyle}
          target="_blank"
        >
          Boredom Busters
        </a>
      </Typography>
      {/* Add your repository link here */}
    </div>
  );
}

export default Footer;
