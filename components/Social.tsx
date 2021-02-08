import { motion } from "framer-motion";

import {
  FaLinkedin,
  FaTwitter,
  FaReddit,
  FaSkype,
  FaGithub,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Social() {
  const myEmail = "akibh805.com";

  let items = [
    {
      url: "https://www.linkedin.com/in/shuaib-hasan-akib-028140185/",
      icon: <FaLinkedin />,
    },
    {
      url: "https://github.com/akib1997",
      icon: <FaGithub />,
    },
    // {
    //   url: "https://twitter.com/Shuaibhasanakib",
    //   icon: <FaTwitter />,
    // },
    // {
    //   url: "https://www.reddit.com/user/shuaib-akib",
    //   icon: <FaReddit />,
    // },
    {
      url: myEmail,
      icon: <HiMail />,
    },
    {
      url: "skype:live:acb1141573d6f57c?chat",
      icon: <FaSkype />,
    },
  ];
  return (
    <motion.div
      // initial={{ y: 20, opacity: 0.6 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ yoyo: Infinity, duration: 5, ease: "easeIn" }}
      className="fixed right-0 top-1/4 z-50 bg-blue-500 p-3"
    >
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${items.length - 1 === index ? "mb-0" : "mb-2"}`}
          >
            <a
              href={item.url === myEmail ? `mailto:${myEmail}` : item.url}
              rel="noreferrer"
              target="_blank"
              className="text-2xl text-white"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
