import * as React from "react";
import Typography from "@mui/material/Typography";

const style = {
  fontSize: "15px",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#0C0A3E",
  color: "white",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontStyle: "italic",
  "&: hover": {
    cursor: "pointer",
  },
};

function Footer() {
  return (
    <div>
      <Typography variant="h6" style={style}>
        This website was created by the Boredom Busters team: Amaal, Azza,
        Lotanna, and Matthew. Check out our GitHub repo:{" "}
        <a
          href="https://github.com/Mtlightfoot/cure-my-boredom"
          style={linkStyle}
          rel="noopener noreferrer"
        >
          Boredom Busters
        </a>
      </Typography>
    </div>
  );
}

export default Footer;
