import cpp from "../assets/icons8-c++.svg";
import java from "../assets/icons8-java.svg";
import python from "../assets/icons8-python.svg";
import javascript from "../assets/icons8-javascript.svg";
import html5 from "../assets/icons8-html.svg";
import css3 from "../assets/icons8-css3.svg";
import react from "../assets/icons8-react-native.svg";
import django from "../assets/icons8-django.svg";
import fastapi from "../assets/logo-teal.png";
import restapi from "../assets/icons8-rest.svg"; // placeholder if no icon
import mysql from "../assets/icons8-mysql.svg";
import postgresql from "../assets/icons8-postgresql.svg";
import github from "../assets/icons8-github.svg";
import postman from "../assets/icons8-postman.svg";
import vscode from "../assets/icons8-vs-code.svg";
import pytorch from "../assets/icons8-pytorch.svg";
import scikitlearn from "../assets/scikit-learn-logo-small.png";


import { useState } from "react"; 
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const skills = [
  // Programming Languages
  { name: "C++", category: "Languages", icon: cpp },
  { name: "Java", category: "Languages", icon: java },
  { name: "Python", category: "Languages", icon: python },
  { name: "Java Script", category: "Languages", icon: javascript },

  // Frontend
  { name: "HTML", category: "Frontend", icon: html5 },
  { name: "CSS", category: "Frontend", icon: css3 },
  { name: "React", category: "Frontend", icon: react },

  // Backend
  { name: "Django", category: "Backend", icon: django },
  { name: "FastAPI", category: "Backend", icon: fastapi },
  { name: "REST API", category: "Backend", icon: restapi },

  { name: "MySQL", category: "Backend", icon: mysql },
  { name: "Postgre SQL", category: "Backend", icon: postgresql },

  // Tools
  { name: "GitHub", category: "Tools", icon: github },
  { name: "Postman", category: "Tools", icon: postman },
  { name: "VS Code", category: "Tools", icon: vscode },

  // Machine Learning / AI
  { name: "PyTorch", category: "AI/ML", icon: pytorch },
  { name: "scikit-learn", category: "AI/ML", icon: scikitlearn },
];

const categories = [
  "all",
  "Languages",
  "Frontend",
  "Backend",
  "Tools",
  "AI/ML",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, isInView] = useInView({ threshold: 0.2 });
  console.log(isInView);
  console.log(ref);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" ref={ref} className="px-4 h-auto relative mb-24">
      <div className="container mx-auto max-w-5xl">
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold mb-12 text-center opacity-0",
            isInView ? "animate-fade-in-delay-3" : ""
          )}
        >
          My{" "}
          <span
            className={cn(
              "text-primary animate-fade-in ",
              isInView ? "animate-fade-in" : ""
            )}
          >
            Skills
          </span>
        </h2>

        {/* Category buttons */}
        <div className={cn("flex flex-wrap justify-center gap-4 mb-12 opacity-0 ", isInView ? "animate-fade-in-delay-3" : "")}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 animate-fade-in capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-primary/30"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-6">
          {filteredSkills.map((skill, index) => {
            const delay = index * 0.12; // stagger
            return (
              <div
                key={skill.name + activeCategory}
                className={cn(
                  "bg-card p-6 rounded-lg shadow-xs card-hover opacity-0",
                  isInView ? "animate-fade-in" : ""
                )}
                style={{
                  animationDelay: isInView ? `${delay}s` : "0s",
                }}
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mb-2"
                  />
                  <h3 className="text-sm text-center">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
