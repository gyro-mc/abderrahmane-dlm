"use client";
import Link from "next/link";
import TiltedCard from "@/src/blocks/Components/TiltedCard/TiltedCard";
import { motion } from "framer-motion";
interface DataType {
  index: string;
  title: string;
  description: string;
  image: string;
  githubLink: string;
}

export default function ProjectCard({ data }: { data: DataType }) {
  return (
    <motion.div
      className="flex flex-row justify-between"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Animate only once when 50% is in view
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-start items-center w-[600px] ">
          <motion.div className="border-transparent border-r-2 border-r-black border-b-2 border-b-black p-10 pr-20 w-[500px]">
            <h1 className="text-5xl font-medium"> {data.title}</h1>
          </motion.div>
          <div className="p-12 font-medium border-b-2 border-b-black w-[50%]">
            <h1 className="text-2xl">{data.index}</h1>
          </div>
        </div>
        <div className="max-w-[600px]">
          {" "}
          <p className="max-w-[600px]">{data.description}</p>
        </div>
      </div>
      <div>
        <Link href={data.githubLink}>
          <TiltedCard
            imageSrc={data.image}
            altText={data.title}
            containerHeight="200px"
            containerWidth="350px"
            imageHeight="200px"
            imageWidth="350px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </Link>
      </div>
    </motion.div>
  );
}
