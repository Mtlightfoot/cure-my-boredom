import * as React from "react";
import Typography from "@mui/material/Typography";

const style = {
  height: "25px",
  fontSize: "10px",
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
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
          target="_blank"
        >
          Boredom Busters
        </a>
      </Typography>
    </div>
  );
}

export default Footer;
