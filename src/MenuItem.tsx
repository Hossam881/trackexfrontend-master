import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#4d454a", "#4d454a", "#4d454a", "#4d454a", "#4d454a"];
const NavText = ["Home","MyDevices","Settings","Map","Analytics" ];
const NavIcons = ["🏠","📱","⚙️","🗺️", "📈 "];
const Navlinks =["https://www.w3schools.com/html/default.asp",
  "https://www.youtube.com/watch?v=gNnzEFB41Ck",
  "https://www.youtube.com/watch?v=iQuAtbi9UKo&ab_channel=NikoOmilana",
"https://www.youtube.com/watch?v=D8c-2HXIYi0&ab_channel=SkySportsFootball",
"https://www.youtube.com/watch?v=GkliKFFwsQI&ab_channel=SkySportsFootball"];
export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}> {NavIcons[i]} </div>
      <div className="text-placeholder" style={style}>
        <a href={Navlinks[i]} target="_blank">
        {NavText[i]}
        </a>
      </div>
    </motion.li>
  );
};
