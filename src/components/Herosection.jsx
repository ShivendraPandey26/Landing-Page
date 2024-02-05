import React from "react";
import "./Herosection.css";
import Typed from "react-typed";

function Herosection() {
  return (
    <div>
      <div className="height text-center">
        <h2 className="text-3xl pt-36">Learn with us</h2>

        <h1 className="text-6xl m-10 text-white">Grow with us</h1>

        <div className="mb-20">
          <span className="text-4xl mb-16 mx-2">Learn</span>

          <span className="text-4xl">
            <Typed
              strings={[
                "Web Development",
                "Digital marketing",
                "Ethical Hacking",
                "C++",
                "DSA",
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap"
              ]}
              typeSpeed={80}
              backSpeed={60}
              loop={true}
            />
          </span>
        </div>

        <button className="w-32 h-12 bg-green-600 rounded-3xl text-white hover:bg-green-700">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Herosection;
