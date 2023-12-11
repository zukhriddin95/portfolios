import CountUp from "react-countup";
import Resume from "../assets/CV-resume.pdf"


import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section lg:mt-[120px]" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            viewport={{ once: false, amount: 0.3 }}
            whileInView={"show"}
            className="lg:mt-[150px] flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            viewport={{ once: false, amount: 0.3 }}
            whileInView={"show"}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I`m a Freelance Front-end Developer with over 1 years of Exprience
            </h3>
            <p className="mb-6">
              I’m a frontend developer.I started learning programming in 2020. I
              work with technologies: HTML, Css, Scss, Bootstrap, Material UI,
              Ant design, Tailwind.css, Javascript, React, Redux, TypeScript,
              NextJs.
            </p>
            {/* status? */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={13} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  month of <br />
                  exprience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={12} duration={5} /> : null}
                  
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  SatisFied <br />
                  Clients
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={15} duration={5} /> : null}
                  
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  complated
                </div>
              </div>
            </div>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg" >
               <a href={Resume} download="resume">  Resume CV </a>
              </button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
