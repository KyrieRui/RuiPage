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

            <div className="container m-auto flex gap-8 justify-center">
              <button className="px-5 py-3 bg-blue-500 rounded-md text-white mt-5">
                Download my CV
              </button>
              <button className="px-5 py-3 bg-blue-500 rounded-md text-white mt-5">
                Contact me
              </button>
            </div>
          </div>
          <div className="w-2/2">
            <img
              className="rounded-full"
              src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/328998714_885168419257223_3222668373957364843_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=HNiHZXgSB1UAX8-rnks&_nc_ht=scontent-syd2-1.xx&oh=00_AfAjAoLlgpXdGbd8OeAs3SZieSBBdGqklVa_02hrYbJvuw&oe=65DFF051"
              alt="Rui"
              style={{ width: "400px", height: "auto" }}
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
      <section className="px-4 py-5">
        <div>
          <h2>Featured works 1</h2>
          <div>
            <img
              src="https://github.com/KyrieRui/BOPRC_water_meter_Monitor_Demo/blob/main/WX20231208-114409@2x.png?raw=true"
              alt="work"
              style={{ width: "400px", height: "auto" }}
            />
            <div>
              <span>2023</span>
              <span>Dashboard</span>
            </div>
            <p>a localy running LLM for the BOPRC water meter monitor system</p>
          </div>
        </div>
        <div>
          <h2>Featured works 2</h2>
          <div>
            <img
              src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkb07ifzibf4wjsrfhrly.png"
              alt="work"
              style={{ width: "400px", height: "auto" }}
            />
            <div>
              <span>2023</span>
              <span>Dashboard</span>
            </div>
            <p>a localy running LLM for the BOPRC water meter monitor system</p>
          </div>
        </div>
        <div>
          <h2>Featured works 3</h2>
          <div>
            <img
              src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsnlymqk63wrzamd1c2qt.png"
              alt="work"
              style={{ width: "400px", height: "auto" }}
            />
            <div>
              <span>2023</span>
              <span>Dashboard</span>
            </div>
            <p>a localy running LLM for the BOPRC water meter monitor system</p>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <div className="container m-auto flex justify">
            <a>
              <img src="https://img.icons8.com/ios/50/000000/facebook--v1.png" />
            </a>
            <a>
              <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
            </a>
            <a>
              <img src="https://img.icons8.com/ios/50/000000/linkedin.png" />
            </a>
            <a>
              <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" />
            </a>
          </div>
          <p>Copyright @ 2024</p>
        </div>
      </footer>
    </>
  );
}

export default App;