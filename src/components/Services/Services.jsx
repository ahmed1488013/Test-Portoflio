import { useRef } from "react";
import "./serv.scss";
import { motion,useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
    const ref=useRef();
    const isInView=useInView(ref,{margin:"-100px"});
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
    ref={ref}
    animate={isInView && "animate"}
      >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>uniqe</motion.b> ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>for your</motion.b> business
          </h1>
          <button>what we do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            odit. Iure incidunt culpa, laborum nam eos perferendis voluptates
            enim, adipisci aut deserunt porro sequi? Autem tempora iste tenetur
            unde asperiores.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            odit. Iure incidunt culpa, laborum nam eos perferendis voluptates
            enim, adipisci aut deserunt porro sequi? Autem tempora iste tenetur
            unde asperiores.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            odit. Iure incidunt culpa, laborum nam eos perferendis voluptates
            enim, adipisci aut deserunt porro sequi? Autem tempora iste tenetur
            unde asperiores.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
