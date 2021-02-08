import { AiOutlineMail, AiFillSkype } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="pt-16 bg-black text-white footer">
      <div className="md:w-1/2 w-2/3 mx-auto">
        <h2 className="text-6xl mb-4">Find Me</h2>
        {/* <span className="text-4xl block">On</span> */}
        <div className="flex mt-2 flex-col">
          <div className="mb-3">
            {/* <AiOutlineMail className="text-4xl mr-3" /> */}
            <a
              href="mailto:akibh805@gmail.com"
              className="inline-block text-xl md:text-2xl text-blue-300 border-2 ml-1 border-blue-200 px-2 py-1"
            >
              akibh805@gmail.com
            </a>
          </div>
          <div className="mb-2">
            {/* <AiFillSkype className="text-4xl mr-3" /> */}
            <a
              href="skype:live:acb1141573d6f57c?chat"
              className="inline-block text-xl md:text-2xl text-blue-300 border-2 ml-1 border-blue-200 px-2 py-1"
            >
              acb1141573d6f57c?chat
            </a>
          </div>
        </div>
        <p className="text-center pt-16 pb-4">
          Copyright &copy; 2017-2021. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
