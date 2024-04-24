"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Isiqalo School Website",
    description: "A website i coded for a newly registered Private school located in Vereeeniging, South Africa",
    image: "/images/projects/isiqalo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CharlieNndwa/Isiqalo",
    previewUrl: "https://www.isiqaloschool.co.za/",
  },
  {
    id: 2,
    title: "Zilisimenye Home Website",
    description: "A website i coded for a Old Age Nursing Home situated in Duncanville, South Africa",
    image: "/images/projects/zilili.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CharlieNndwa/zilisimenye-home",
    previewUrl: "https://zilisimenye-home.vercel.app/",
  },
  {
    id: 3,
    title: "Zilisimenye Home Website: hosted by Afrihost",
    description: "A website i coded for a Old Age Nursing Home using a domain name purchased from Afrihost.",
    image: "/images/projects/zilinext.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CharlieNndwa/zilisimenye",
    previewUrl: "https://www.zilisimenyehome.co.za/",
  },
  {
    id: 4,
    title: "A.I Summarizer",
    description: "I coded a Article summarizer using chatgpt and next.js",
    image: "/images/projects/summarizer.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/CharlieNndwa/Summarizer-AI",
    previewUrl: "https://summy-ai.netlify.app//",
  },
  {
    id: 5,
    title: "Apple-Clone Website",
    description: "Apple Website",
    image: "/images/projects/apple.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CharlieNndwa/apple-demo",
    previewUrl: "https://apple-landing-pg.netlify.app/",
  },
  {
    id: 6,
    title: "Travel Guide Website",
    description: "I coded a Travel Guide web app using React",
    image: "/images/projects/travel.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CharlieNndwa/travels",
    previewUrl: "https://journeyjot.netlify.app/",
  },
  {
    id: 7,
    title: "Amazon Website",
    description: "I coded a Amazon clone website using Next.js",
    image: "/images/projects/amazon.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CharlieNndwa/amazon-store",
    previewUrl: "https://amazon-store-tau.vercel.app/",
  },
  {
    id: 8,
    title: "Burger King Website",
    description: "I coded a Burger King clone website using Next.js",
    image: "/images/projects/burgerking.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CharlieNndwa/burger-king",
    previewUrl: "https://burger-king-seven.vercel.app/",
  },
  {
    id: 9,
    title: "Nike Website",
    description: "I coded a Nike clone website using Javasccript",
    image: "/images/projects/nike.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CharlieNndwa/nike-e-commerce",
    previewUrl: "https://nike-e-commerce-nine.vercel.app/",
  },
];

const ProjectsSide = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSide;
