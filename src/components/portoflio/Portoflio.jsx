import { useRef } from "react";
import "./port.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { img } from "framer-motion/client";

const items = [
  {
    id: 1,
    title: "Dashbord",
    img: "/dog.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam molestias dicta animi officia voluptatum dolores quidem itaque officiis porro iure nihil fuga distinctio minima, voluptas fugiat unde natus quo maiores.",
  },
  {
    id: 2,
    title: "e-comerce",
    img: "/woman.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam molestias dicta animi officia voluptatum dolores quidem itaque officiis porro iure nihil fuga distinctio minima, voluptas fugiat unde natus quo maiores.",
  },
  {
    id: 3,
    title: "react",
    img: "/woman2.webp",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam molestias dicta animi officia voluptatum dolores quidem itaque officiis porro iure nihil fuga distinctio minima, voluptas fugiat unde natus quo maiores.",
  },
  {
    id: 4,
    title: "project",
    img: "/dop.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam molestias dicta animi officia voluptatum dolores quidem itaque officiis porro iure nihil fuga distinctio minima, voluptas fugiat unde natus quo maiores.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <img src={item.img} alt="" ref={ref}/>
          <motion.div className="textbox" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>see demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portoflio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 300,
  });

  return (
    <div className="portoflio" ref={ref}>
      <div className="proggres">
        <h1>fetured works</h1>
        <motion.div style={{ scaleX }} className="proggresBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portoflio;
