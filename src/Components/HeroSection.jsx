import TasnimImg from "../assets/Tasnim.png";

const identity = ["Web Experiences", "AI/ML Solutions", "Backend Systems"];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 z-10 mb-24 mt-20"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        {/* Left Side - Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="font-bold leading-tight text-[clamp(2rem,5vw,4rem)]">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Tasnim.
            </span>
            <span className="block opacity-0 animate-fade-in-delay-3">
              I turn ideas into{" "}
              <span className="inline-block overflow-hidden h-[clamp(2rem,5vw,4rem)] align-middle min-w-[14ch] opacity-0 animate-fade-in-delay-4">
                <span className="block animate-roll text-blue-500">
                  {identity.map((item) => (
                    <span key={item} className="block">
                      {item}
                    </span>
                  ))}
                </span>
              </span>
            </span>
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-muted-foreground mx-auto dark:text-gray-400 max-w-md opacity-0 animate-fade-in-delay-5">
            A creative developer passionate about combining AI and web
            development to build impactful digital solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button"> 
              View My Work
              </a>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="flex-1 relative flex justify-center items-center">
          <div
            className="absolute rounded-full blur-2xl opacity-30 bg-gradient-to-tr from-blue-500 to-purple-500
             w-[clamp(14rem,25vw,24rem)] h-[clamp(18rem,30vw,28rem)]"
          ></div>

          <div className="relative z-10 opacity-0 animate-fade-in-delay-2 scale-100 hover:scale-105 transition-transform duration-500">
            <img
              src={TasnimImg}
              alt="Tasnim"
              className="object-cover rounded-full"
              style={{
                width: "min(max(24rem, 35vw), 46rem)",
                height: "min(max(24rem, 35vw), 46rem)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
