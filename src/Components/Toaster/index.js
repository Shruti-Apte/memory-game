import { motion } from "framer-motion";


const Toaster = ({ show, message }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={show ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed top-10 right-[50%] reverse-theme px-[1.5%] py-[1.5%] rounded-lg shadow-lg"
    >
      {message}
    </motion.div>
  );
}

export default Toaster;
