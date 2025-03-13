import { motion } from "framer-motion";

export default function Button({ text, onClick }) {
  return (
    <motion.button
      className="w-full py-2 cursor-pointer rounded-full bg-[#0e0d0d] text-white text-lg"
      whileHover={{ scale: 1.1, backgroundColor: "#1f1f1f" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}
