import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="px-4 py-6 sm:py-12">
        <div className="container m-auto flex justify-between">
          <div>
            <h1 className="text-4xl font-mono">Ray</h1>
          </div>
          <div className="">
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://github.com/KyrieRui"
                  onClick={(e) => {
                    if (
                      !window.confirm(
                        "I will take you to my GitHub page, are you sure to leave this page?"
                      )
                    ) {
                      e.preventDefault();
                    }
                  }}
                  className="font-mono text-3xl text-gray-500 hover:text-black cursor-pointer"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/kyrierui"
                  onClick={(e) => {
                    if (
                      !window.confirm(
                        "I will take you to my Dev page, are you sure to leave this page?"
                      )
                    ) {
                      e.preventDefault();
                    }
                  }}
                  className="font-mono text-3xl text-gray-500 hover:text-black cursor-pointer"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    if (
                      !window.confirm(
                        "Are you sure you want to leave this page and go to my Linkedin?"
                      )
                    ) {
                      e.preventDefault();
                    }
                  }}
                  href="https://www.linkedin.com/in/zhirui-wang-b5b1b9194/"
                  className="font-mono text-3xl text-gray-500 hover:text-black cursor-pointer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="px-4 py-32">
        <div className="container m-auto flex flex-col-reverse sm:flex-row justify-between items-center">
          <div className="w-2/2 text-center mt-6">
            <div className="shadow-lg">
              <h2 className="text-4xl font-mono">Hi, I'm Ray</h2>
              <h2 className="text-3xl font-mono mt-4">
                I'm a: Software Developer and AI Engineer
              </h2>

              <p className="mt-6 text-gray-500">
                Graduated from Victoria University of Wellington November 2023
              </p>
              <p className="mt-3 text-gray-500">Majoring in Computer Science</p>
            </div>

            <div className="container m-auto flex gap-8">
              <a
                href="/resume.pdf"
                download="Ray_CV_Latex.pdf"
                className="px-5 py-3 text-base font-mono bg-amber-500 rounded-md text-white mt-5"
              >
                Download My CV
              </a>

              <a
                // onClick={() => {
                //   window.alert(
                //     "My contace detials are: \nEmail: kyrie19960324@gamil.com\nPhone: 021-0849-6271"
                //   );
                // }}
                href="mailto:kyrie19960324@gmail.com"
                className="px-5 py-3 text-base font-mono bg-amber-500 rounded-md text-white mt-5"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="w-2/2">
            <img
              className="rounded-full"
              src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/428633120_3785535288434439_4517344367272757351_n.jpg?stp=cp6_dst-jpg_s1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=KOOZne8HxoYAX9Ctzbh&_nc_ht=scontent-syd2-1.xx&oh=00_AfB4LhKAaJWHn3vLORVluPX4uy8E8RhVBk0-fvFufTCEkQ&oe=65E19BAF"
              alt="Rui"
              style={{ width: "440px", height: "auto" }}
            />
          </div>
        </div>
      </main>
      <section className="px-4 py-8 bg-gray-200">
        <div className="container flex m-auto justify-between">
          <div>
            <h2 className="text-lg text-gray-600 font-senibold">
              Recent Posts
            </h2>
          </div>
          <div>
            <a className="text-base text-gray-500 hover:text-black">View All</a>
          </div>
        </div>
        <div className="flex justify-between mt-5 gap-3">
          <div className="bg-white p-3 rounded-sm basis-1/2">
            <h2 className="text-lg font-semibold">Google Gemma first try</h2>
            <div className="mt-3 flex gap-3 items-center">
              <span className="text-gray-400 text-sm font-light">
                22 Feb 2024
              </span>
              <span className="w-[1px] h-[17px] bg-gray-700"></span>
              <span className="text-gray-400 text-sm font-light">
                Hugging Face, Python
              </span>
            </div>
            <p className="mt-3 text-base font-light">
              Google has released Gemma at Hugging Face. Now developers can use
              it to do more things like RAG or fine tunning LLM. The blog is a
              simple set up tutorial.
            </p>
          </div>
          <div className="bg-white p-3 rounded-sm basis-1/2">
            <h2 className="text-lg font-semibold">YOLO V5 on Android phone</h2>
            <div className="mt-3 flex gap-3 items-center">
              <span className="text-gray-400 text-sm font-light">
                26 Jan 2024
              </span>
              <span className="w-[1px] h-[17px] bg-gray-700"></span>
              <span className="text-gray-400 text-sm font-light">
                Yolov5, Android
              </span>
            </div>
            <p className="mt-3 text-base font-light">
              There are many interesting experiments that can be done using the
              Yolo algorithm, such as detecting the height of a river. This blog
              shares how to deploy the Yolo algorithm program using an Android
              phone.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-5">
        <div className="container m-auto">
          <h2 className="text-lg text-gray-600 font-senibold">
            Featured works
          </h2>
          <div className="flex mt-8 gap-3">
            <div className="basis-1/2">
              <img
                src="https://github.com/KyrieRui/BOPRC_water_meter_Monitor_Demo/blob/main/WX20231208-114409@2x.png?raw=true"
                alt="work"
                style={{ width: "600px", height: "auto" }}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">Locally LLM Dashboard</h2>
              <div className="flex gap-3 my-3 item-center">
                <span className="px-3 py-1 bg-slate-300 text-sm rounded-2xl">
                  2023
                </span>
                <span className="text-sm font-mono text-slate-500">
                  Dashboard
                </span>
              </div>
              <p className="text-lg font-mono text-gray-600">
                Use Python build a Locally running LLM, Front-End with React
                asstant(fine-tunning LLaMA2 7B Chat)
              </p>
            </div>
          </div>
        </div>

        <div className="container m-auto">
          <div className="flex mt-5 gap-3">
            <div className="basis-1/2 ">
              <img
                className="rounded-md"
                src="https://github.com/KyrieRui/Flutter_BOP_GPT/blob/main/Screen%20Recording%202024-02-29%20at%201.gif?raw=true"
                alt="work"
                style={{ width: "600px", height: "auto" }}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">IOS BOP GPT</h2>
              <div className="flex gap-3 my-3 item-center">
                <span className="px-3 py-1 bg-slate-300 text-sm rounded-2xl">
                  2024
                </span>
                <span className="text-sm font-mono text-slate-500">
                  Mobile App
                </span>
              </div>
              <p className="text-lg font-mono text-gray-600">
                Use Flutter to build a mobile app for BOPRC stuff could use AI
                asstant(using Google Gemini API)
              </p>
            </div>
          </div>
        </div>

        <div className="container m-auto">
          <div className="flex mt-5 gap-3">
            <div className="basis-1/2">
              <img
                className="rounded-md"
                src="https://github.com/KyrieRui/YOLO5_River_Reading/blob/main/real01.gif?raw=true"
                alt="work"
                style={{ width: "600px", height: "auto" }}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">YoloV8 Real Time Model</h2>
              <div className="flex gap-3 my-3 item-center">
                <span className="px-3 py-1 bg-slate-300 text-sm rounded-2xl">
                  2024
                </span>
                <span className="text-sm font-mono text-slate-500">
                  Mobile APP
                </span>
              </div>
              <p className="text-lg font-mono text-gray-600">
                Self training YoloV5 modle and running on mobile for monitoring
                river level(using Ultralytics Hub)
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 py-5">
        <div className="container m-auto">
          <div className="flex item-center justify-center gap-4">
            <a className="cursor-pointer hover:scale-125 delay-75 transition-all">
              <img
                src="https://img.icons8.com/ios/50/000000/facebook--v1.png"
                className="w-9"
              />
            </a>
            <a className="cursor-pointer hover:scale-125 delay-75 transition-all">
              <img
                src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
                className="w-9"
              />
            </a>
            <a className="cursor-pointer hover:scale-125 delay-75 transition-all">
              <img
                src="https://img.icons8.com/ios/50/000000/linkedin.png"
                className="w-9"
              />
            </a>
            <a className="cursor-pointer hover:scale-125 delay-75 transition-all">
              <img
                src="https://img.icons8.com/ios/50/000000/twitter--v1.png"
                className="w-9"
              />
            </a>
          </div>
          <p>Copyright @ 2024</p>
        </div>
      </footer>
    </>
  );
}

export default App;
