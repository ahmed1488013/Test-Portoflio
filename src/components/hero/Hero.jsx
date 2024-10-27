import "./hero.scss";
import { motion } from "framer-motion";

const textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const slidervariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrpper">
        <motion.div
          className="textContainer"
          variants={textvariants}
          initial={"initial"}
          animate={"animate"}>
          <motion.h2 variants={textvariants}>ahmed hamada</motion.h2>
          <motion.h1 variants={textvariants}>
            Web developer an UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textvariants}>
            <motion.button variants={textvariants}>
              see the latest works
            </motion.button>
            <motion.button variants={textvariants}>contact me</motion.button>
          </motion.div>
          
          <motion.img
            variants={textvariants}
            animate={"scrollButton"}
            src="scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingtext"
        variants={slidervariants}
        initial={"initial"}
        animate={"animate"}>
        writer Content creator influancer
      </motion.div>
      <div className="imgContainer">
        <img src="/my.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
