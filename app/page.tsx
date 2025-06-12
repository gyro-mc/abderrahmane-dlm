"use client ";
import ScrambledText from "@/src/blocks/TextAnimations/ScrambledText/ScrambledText";
import { projectsData } from "@/lib/projectsData";
import NavBar from "@/components/navBar";
import MagnetLines from "@/src/blocks/Animations/MagnetLines/MagnetLines";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/projectCard";
import Footer from "@/components/footer";
export default function home() {
  return (
    <div className="w-full h-auto">
      <NavBar />
      <div className="flex flex-col items-center gap-40">
        <div className="w-[60%] bg-grey-100 ">
          <div className="flex flex-col pt-[15%] gap-14 ">
            <div className="flex flex-row ">
              <div className=" flex flex-col gap-14 w-[60%]  p-6">
                <ScrambledText
                  className="scrambled-text-demo  w-full"
                  radius={50}
                  duration={2.7}
                  speed={0.5}
                  scrambleChars={"010"}
                >
                  <h1 className="font-bold text-5xl ">
                    Hello, I&apos;m A.D
                    <br />
                    I&apos;m developer
                  </h1>
                </ScrambledText>
                <p className="  max-w-[80%] font-light">
                  I&apos;m a full-stack developer who values simplicity, performance,
                  and thoughtful design. I build with tools like React and
                  Node.js. <br />
                  <br />
                  Always aiming for clean, reliable code. Clarity and empathy
                  guide my work and how I solve problems.
                </p>
              </div>
              <div className="w-[40%] ">
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
              </div>
            </div>
            <Separator className="my-4 bg-black" />
          </div>
        </div>
        <div className="w-[60%] flex flex-col justify-center gap-40">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        <Separator className="my-4 bg-black w-[80vw]"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
