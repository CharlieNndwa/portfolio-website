"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/javascript.svg"
              alt="JavaScript Icon"
              width={24}
              height={24}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span style={{ marginLeft: "8px" }}>JavaScript</span>
          </div>
        </li>
        <li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/angular.svg"
              alt="Angular Icon"
              width={24}
              height={24}
            />
            <span style={{ marginLeft: "8px" }}>Angular</span>
          </div>
        </li>
        <li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/react.png"
              alt="Angular Icon"
              width={24}
              height={24}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span style={{ marginLeft: "8px" }}>React</span>
          </div>
        </li>
        <li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/flutter.svg"
              alt="Angular Icon"
              width={24}
              height={24}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span style={{ marginLeft: "8px" }}>Flutter</span>
          </div>
        </li>
        <li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/python.svg"
              alt="Angular Icon"
              width={24}
              height={24}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span style={{ marginLeft: "8px" }}>Python</span>
          </div>
        </li>
    
        <li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/node.svg"
              alt="Node.js Icon"
              width={24}
              height={24}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span style={{ marginLeft: "8px" }}>Node.js</span>
          </div>
        </li>

        <li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/django-svg.svg"
              alt="Django Icon"
              width={24}
              height={24}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span style={{ marginLeft: "8px" }}>Django</span>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Academy of Vaal Triangle</li>
        <li>College on Hills</li>
        <li>University of KwaZulu-Natal</li>
        <li>Diamond Education College</li>
        <li>Udemy: Complete 2024 Web Development Bootcamp </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Electrical Engineering N2</li>
        <li>Diamond Cutting & Polishing</li>
        <li>Rough Diamond Evaluation & Grading</li>
      </ul>
    ),
  },
];

const AboutSide = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about-me"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            As a passionate developer, I specialize in creating interactive and
            responsive web applications and mobile apps. With expertise in
            Angular, JavaScript, React, Next.js, HTML, CSS, Git, Python,
            Expo React Native, Django, Node.js, and Flutter, I bring a wealth of
            experience to every project. From crafting sleek interfaces to
            building robust backend systems. I am a quick learner and I am
            always looking to expand my knowledge and skill set.I am a team
            player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSide;
