import Sidebar from "../sidbar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Nabar = () => {
  return (
    <div className="navbar">
    <Sidebar/>
      <div className="wrpper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ahmed Hamada
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/public/facebook.png" alt="asas" />
          </a>
          <a href="#">
            <img src="/public/instagram.png" alt="asas" />
          </a>
          <a href="#">
            <img src="/public/youtube.png" alt="asas" />
          </a>
          <a href="#">
            <img src="/public/dribbble.png" alt="asas" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nabar;
