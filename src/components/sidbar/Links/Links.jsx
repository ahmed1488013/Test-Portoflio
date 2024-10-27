import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["HomePage", "Services", "Portoflio", "Contact", "About"];
  return (
    <motion.div className="Links" variants={variants}>
      {items.map((item, index) => (
        <motion.a href={`#${item}`} key={index} variants={itemVariants} whileHover={{scale:1.2}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
