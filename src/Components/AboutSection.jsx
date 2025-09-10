import { Briefcase, Code, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export const AboutSection = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.2 });
  const [introRef, introInView] = useInView({ threshold: 0.2 });
  const [card1Ref, card1InView] = useInView({ threshold: 0.2 });
  const [card2Ref, card2InView] = useInView({ threshold: 0.2 });
  const [card3Ref, card3InView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="px-4 h-auto relative mb-24">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2
          ref={titleRef}
          className={cn(
            "text-3xl md:text-4xl font-bold mb-12 text-center opacity-0",
            titleInView ? "animate-fade-in-delay-1" : ""
          )}
        >
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Intro Text */}
          <div
            ref={introRef}
            className={cn(
              "space-y-6 opacity-0",
              introInView ? "animate-fade-in" : ""
            )}
          >
            <h3 className="text-2xl font-semibold">
              Hi, I’m <strong>Md. Tasnimur Rahman Shakir</strong>
            </h3>
            <p className="text-muted-foreground">
              I’m a passionate developer who loves exploring AI and web
              development. I enjoy creating things that not only work but also
              make a real impact.
            </p>
            <p className="text-muted-foreground">
              To me, coding is about solving real life problems, learning new
              ideas, and Building creative projects. Whether it’s training deep
              learning models or crafting smooth user experiences, I love
              turning ideas into something people can actually use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="../assets/Tasnimur_Rahman_Resume.pdf"
                download="Md. Tasnimur Rahman Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div
              ref={card1Ref}
              className={cn(
                "gradient-border p-6 card-hover opacity-0",
                card1InView ? "animate-fade-in-delay-1" : ""
              )}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    I build responsive web apps using modern frameworks like
                    React, Tailwind CSS, and Django.
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={card2Ref}
              className={cn(
                "gradient-border p-6 card-hover opacity-0",
                card2InView ? "animate-fade-in-delay-1" : ""
              )}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Soft Skills</h4>
                  <p className="text-muted-foreground">
                    Team player with strong communication and problem-solving
                    skills.
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={card3Ref}
              className={cn(
                "gradient-border p-6 card-hover opacity-0",
                card3InView ? "animate-fade-in-delay-1" : ""
              )}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Planning and executing AI and web projects efficiently from
                    start to finish with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
