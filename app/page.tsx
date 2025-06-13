"use client";
import { projectsData } from "@/lib/projectsData";
import NavBar from "@/components/navBar";
import MagnetLines from "@/src/blocks/Animations/MagnetLines/MagnetLines";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/projectCard";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="w-full h-auto relative">
      <NavBar />
      <div className="flex flex-col items-center gap-40">
        <div className="w-[60%] bg-grey-100 ">
          <div className="flex flex-col pt-[15%] gap-14 ">
            <div className="flex flex-row ">
              <div className=" flex flex-col gap-14 w-[60%]  p-6">
                <motion.h1
                  className="font-bold text-5xl  "
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Hello, I&apos;m A.D
                  <br />
                  I&apos;m developer
                </motion.h1>
                <div>
                  <motion.p
                    className="  max-w-[80%] font-light"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    I&apos;m a full-stack developer who values simplicity,
                    performance, and thoughtful design. I build with tools like
                    React and Node.js. <br />
                  </motion.p>
                  <motion.p
                    className="  max-w-[80%] font-light"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <br />
                    Always aiming for clean, reliable code. Clarity and empathy
                    guide my work and how I solve problems.
                  </motion.p>
                </div>
              </div>
              <motion.div
                className="w-[40%] "
                initial={{ opacity: 0 ,y:20}}
                animate={{ opacity: 1 ,y:0}}
                transition={{duration:0.4}}
              >
                <MagnetLines
                  rows={10}
                  columns={14}
                  containerSize="40vmin"
                  lineColor="black"
                  lineWidth="0.1vmin"
                  lineHeight="3vmin"
                  baseAngle={0}
                  style={{ margin: "2rem auto" }}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Separator className="my-4 bg-black" />
            </motion.div>
          </div>
        </div>
        <div className="w-[60%] flex flex-col justify-center gap-40 " id="projects">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
          <Separator className="my-4 bg-black w-[80vw]" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
