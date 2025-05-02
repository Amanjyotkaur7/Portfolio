import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
               <div>
          Hi! I'm <strong>Amanjyot Kaur</strong>, a tech enthusiast and software developer passionate about crafting real-world solutions with clean, scalable code. I'm currently pursuing Computer Science Engineering at Lovely Professional University, where I actively build full-stack projects using <strong>React.js, Node.js, MongoDB, and PHP</strong>.

          <br className="sm:block hidden" /><br />

          I’ve created a full-fledged <strong>gaming website</strong> featuring game previews, downloadable content, and event registration functionalities. I also worked on a <strong>collaborative platform project</strong> that tracks student progress across competitive programming platforms and provides analytical insights along with rankings.

          <br className="sm:block hidden" /><br />

          My passion for game development has led me to explore tools like <strong>Unity</strong> for game logic and mechanics, and <strong>Blender</strong> for 3D modeling and animation. I'm currently diving deeper into real-time multiplayer game development using <strong>Socket.io</strong> and backend integration for live collaboration features.

          <br className="sm:block hidden" /><br />

          I’ve completed bootcamps and training in <strong>DSA (C++)</strong>, <strong>Python</strong>, and <strong>Git & GitHub</strong>, and I love transforming ideas into interactive digital experiences.

          <br className="sm:block hidden" /><br />

          Outside of coding, I’ve honed leadership and team-building skills through active participation in the <strong>NCC</strong> (National Cadet Corps), where I mentored juniors during multiple national-level training camps.

          <br className="sm:block hidden" /><br />

          I’m always up for creative challenges and exciting collaboration opportunities. Let’s connect!
        </div>


        <div className="w-fit break-words">
          <Link
            href="mailto:amanjyotkaur736@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
             amanjyotkaur736@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="https://drive.google.com/drive/folders/1oskXBcSZ8aXbfRrKD5oyXtCtj7FzzTAV?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>

       
      </motion.div>
    </section>
  );
}

export default About;
