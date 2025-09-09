import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ExternalLink, Github } from "lucide-react";

import {useInView} from '@/hooks/useInView'



const projects = [
  {
    id: "01",
    title: "medScan",
    description:
      "This is a project that predicts heart disease at an early stage using deep learning. It analyzes chest X-ray images to detect signs of an enlarged heart (cardiomegaly) and provides clear results through an easy-to-use web interface.",
    tech: ["React", "Django", "Deep Learning"],
    image: "/src/assets/medScan.png",
    liveLink: "https://heart-disease-prediction-6r3vbxfnn.vercel.app/",
    githubLink:
      "https://github.com/TasnimurRahmanShakir/Heart-Disease-Prediction.git",
  },
  {
    id: "02",
    title: "menScan 2",
    description:
      "Another variation of the project with improvements and testing.",
    tech: ["React", "FastAPI", "Deep Learning"],
    image: "/src/assets/medScan.png",
    githubLink:
      "https://github.com/TasnimurRahmanShakir/Heart-Disease-Prediction.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="px-4 h-auto relative mb-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my recent projects, built with care and a strong focus
          on design and user experience.
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
                {/* Left side - details */}
                <div className="text-left">
                  <h3 className="text-6xl tracking-widest text-outline mb-3">
                    {project.id}
                  </h3>
                  <h4 className="text-5xl font-semibold mb-5">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-6 py-2 rounded-xl border bg-primary/10 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5 ml-1">
                    {project.liveLink && (
                      <div className="relative">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-tooltip="Live"
                          className="flex items-center gap-1 text-primary transition-all duration-800 hover:text-primary/80 hover:underline hover:scale-110 tooltip"
                        >
                          <ExternalLink className="w-8 h-8" />
                        </a>
                      </div>
                    )}

                    <div className="relative">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tooltip="Source Code"
                        className="flex items-center gap-1 text-primary transition-all duration-800 hover:text-primary/80 hover:underline hover:scale-110 tooltip"
                      >
                        <Github className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right side - image */}
                <div className="flex justify-center overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-72 object-cover w-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
