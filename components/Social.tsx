import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

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
      icon: <FaLinkedin className="text-xl" />,
    },
    {
      url: "https://github.com/akib1997",
      icon: <FaGithub className="text-xl" />,
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
      icon: <HiMail className="text-xl" />,
    },
    // {
    //   url: "skype:live:acb1141573d6f57c?chat",
    //   icon: <FaSkype />,
    // },
  ];

  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });
  // console.log(height);
  return (
    <motion.div
      // initial={{ y: 20, opacity: 0.6 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ yoyo: Infinity, duration: 5, ease: "easeIn" }}
      className={`fixed right-0 z-50 bottom-44 flex`}
    >
      <span className="fixed w-px bg-white h-40 bottom-0 right-5 z-10"></span>
      <ul ref={ref} className="p-1 space-y-3 relative z-20 bg-transparent">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-blue-00 p-2 rounded-full transform hover:scale-150 transition-transform"
          >
            <a
              href={item.url === myEmail ? `mailto:${myEmail}` : item.url}
              rel="noreferrer"
              target="_blank"
              className="text-xl text-white"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
