import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/Screenshot_1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section lg:mt-[120px]" id="work">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br /> work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                id atque sed dolore quis debitis cumque culpa, quisquam ratione
                praesentium deleniti, fuga natus dolores doloribus!
              </p>
              <button className="btn btn-sm">View all project</button>
            </div>
            {/* image */}
            <div className="group lg:h-[300px] relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-300"
                src={img1}
                alt="project-photo"
              />
              {/* preetitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transiton-all duration-500 z-50">
                <span className="text-gradient text-sm">
                  <a
                    href="https://github.com/zukhriddin0095/e-commerce-gigenik.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    E-commerce | github
                  </a>
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transiton-all duration-700 z-50">
                <span className="text-3xl text-white">
                  <a
                    href="https://gigienik.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    E-commerce
                  </a>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mt-12"
          >
            {/* image */}
            <div className="group lg:h-[300px] relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-300"
                src={img2}
                alt="project-photo"
              />
              {/* preetitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transiton-all duration-500 z-50">
                <span className="text-gradient text-sm">
                  <a
                    href="https://github.com/zukhriddin0095/Exem-6.1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dashboard | github
                  </a>
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transiton-all duration-700 z-50">
                <span className="text-3xl text-white">
                  <a
                    href="https://exem-6-1.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dashboard
                  </a>
                </span>
              </div>
            </div>
            {/* image */}
            <div className="group lg:h-[300px] relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-300"
                src={img3}
                alt="project-photo"
              />
              {/* preetitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transiton-all duration-500 z-50">
                <span className="text-gradient text-sm">
                  <a
                    href="https://github.com/zukhriddin0095/Full-BLog-wep-site"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog Post | github
                  </a>
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transiton-all duration-700 z-50">
                <span className="text-3xl text-white">
                  <a
                    href="https://full-b-log-wep-site.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog Post
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
