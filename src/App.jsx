import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="px-4 py-6">
        <div className="container m-auto flex justify-between">
          <div>
            <h1 className="text-5xl font-mono">Ray</h1>
          </div>
          <div className="">
            <ul className="flex gap-4">
              <li>
                <a className="font-mono text-4xl text-gray-500 hover:text-black cursor-pointer">
                  Works
                </a>
              </li>
              <li>
                <a className="font-mono text-4xl text-gray-500 hover:text-black cursor-pointer">
                  Blogs
                </a>
              </li>
              <li>
                <a className="font-mono text-4xl text-gray-500 hover:text-black cursor-pointer">
                  Contant
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="px-4 py-32">
        <div className="container m-auto flex justify-between items-center">
          <div className="w-1/2">
            <div className="shadow-lg">
              <h2 className="text-4xl font-bold">Hi, I'm Ray</h2>
              <h2 className="text-4xl font-bold">I am a Junior developer</h2>
              <p className="mt-3 text-gray-500">
                Graduated from Victoria University of Wellington November 2023
              </p>
              <p className="mt-3 text-gray-500">Majoring in Computer Science</p>
            </div>

            <div className="container m-auto flex gap-8">
              <button className="px-5 py-3 bg-sky-500 rounded-md text-white mt-5">
                Download My CV
              </button>
              <button className="px-5 py-3 bg-sky-500 rounded-md text-white mt-5">
                Contact Me
              </button>
            </div>
          </div>
          <div className="w-2/2">
            <img
              className="rounded-full"
              src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/428633120_3785535288434439_4517344367272757351_n.jpg?stp=cp6_dst-jpg_s1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=KOOZne8HxoYAX9Ctzbh&_nc_ht=scontent-syd2-1.xx&oh=00_AfB4LhKAaJWHn3vLORVluPX4uy8E8RhVBk0-fvFufTCEkQ&oe=65E19BAF"
              alt="Rui"
              style={{ width: "500px", height: "auto" }}
            />
          </div>
        </div>
      </main>
      <section className="px-4 py-8 bg-gray-200">
        <div className="container flex m-auto justify-between">
          <div>
            <h2 className="text-lg font-senibold">Recent Posts</h2>
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
          <h2 className="text-lg font-semibold">Featured works 1</h2>

          <div className="flex mt-5 gap-3">
            <div className="basis-1/2">
              <img
                src="https://github.com/KyrieRui/BOPRC_water_meter_Monitor_Demo/blob/main/WX20231208-114409@2x.png?raw=true"
                alt="work"
                style={{ width: "400px", height: "auto" }}
              />
            </div>
            <div>
              <h2 className="text-lg font-mono">Locally LLM Dashboard</h2>
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
          <h2 className="text-lg font-semibold">Featured works 2</h2>

          <div className="flex mt-5 gap-3">
            <div className="basis-1/2">
              <img
                src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/428689460_3785548611766440_2753976292737944169_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Bd9bPn2aggAAX-n8pqk&_nc_oc=AQmXaSkYnA7YmJBS7DriRwJcRe1CMYKvlW8_UJk9uDPoVF-ZoKgaueo97LD_jIVnDkw&_nc_ht=scontent-syd2-1.xx&oh=00_AfDNdMCoP0WEWH7VhBK7Zkbf0lNlhdnSeJGsCCaPe1Ds_g&oe=65E1340D"
                alt="work"
                style={{ width: "200px", height: "auto" }}
              />
            </div>
            <div>
              <h2 className="text-lg font-mono">IOS BOP GPT</h2>
              <div className="flex gap-3 my-3 item-center">
                <span className="px-3 py-1 bg-slate-300 text-sm rounded-2xl">
                  2023
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
          <h2 className="text-lg font-semibold">Featured works 3</h2>

          <div className="flex mt-5 gap-3">
            <div className="basis-1/2">
              <img
                src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/428682487_3785548631766438_2238232392985061162_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=OJAc1YKlrt8AX9VEOm0&_nc_ht=scontent-syd2-1.xx&oh=00_AfA2hjEO6xJjcH2zA0qhYvXv_XnVcyVQCfNVHlzQYFv7XQ&oe=65E2F4B0"
                alt="work"
                style={{ width: "200px", height: "auto" }}
              />
            </div>
            <div>
              <h2 className="text-lg font-mono">YoloV8 Real Time Model</h2>
              <div className="flex gap-3 my-3 item-center">
                <span className="px-3 py-1 bg-slate-300 text-sm rounded-2xl">
                  2023
                </span>
                <span className="text-sm font-mono text-slate-500">
                  Dashboard
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
            <a>
              <img
                src="https://img.icons8.com/ios/50/000000/facebook--v1.png"
                className="w-11"
              />
            </a>
            <a>
              <img
                src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
                className="w-11"
              />
            </a>
            <a>
              <img
                src="https://img.icons8.com/ios/50/000000/linkedin.png"
                className="w-11"
              />
            </a>
            <a>
              <img
                src="https://img.icons8.com/ios/50/000000/twitter--v1.png"
                className="w-11"
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
