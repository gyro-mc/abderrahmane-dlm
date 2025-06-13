"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, 
      delayChldren: 0.2, 
    },
  },
};
const childrenVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className=" h-[30%] flex flex-row justify-end items-center p-30 " id="contacts">
      <div className="grid grid-cols-6 grid-rows-6 gap-4">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="relative w-10 h-10">
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-black rounded-full" />
          </div>
        ))}
      </div>
      <motion.div className="w-[60%] flex flex-row justify-center">
        <motion.div
          className=" flex flex-col gap-5"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
            variants={childrenVariants}
            className="text-5xl font-medium"
          >
            Dilmi <br />
            abderrahmane
          </motion.h1>
          <div className="text-lg  flex flex-row gap-6">
            <Link href={"https://www.linkedin.com/"}>
              <motion.a variants={childrenVariants}>Linked In </motion.a>
            </Link>
            <Link href={"https://x.com/"}>
              <motion.a variants={childrenVariants}>Twitter</motion.a>
            </Link>
            <Link href={"https://web.facebook.com/?_rdc=1&_rdr"}>
              <motion.a variants={childrenVariants}>Facebook</motion.a>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
