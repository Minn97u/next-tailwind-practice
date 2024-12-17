"use client";
import { useEffect, useState } from "react";

const Dark: React.FC = () => {
  const [dark, setDark] = useState<string>("");
  const toggleDarkMode = () => {
    const darkModel = localStorage.getItem("darkMode");
    if (darkModel === "enabled") {
      localStorage.setItem("darkMode", "disabled");
      document.documentElement.classList.remove("dark");
      setDark("disabled");
    } else {
      localStorage.setItem("darkMode", "enabled");
      setDark("enabled");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
      document.documentElement.classList.add("dark");
      setDark("enabled");
    } else {
      setDark("disabled");
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-neutral-200 flex flex-col gap-10 justify-center items-center dark:bg-neutral-700">
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-lg bg-white dark:bg-neutral-400 dark:text-neutral-50"
      >
        {"다크모드 토글버튼"}
      </button>
      <p className="text-red-400 text-3xl font-bold ">{dark}</p>
      <div className="shadow-xl shadow-blue-300 container mx-auto p-4 bg-white dark:bg-neutral-400 dark:text-neutral-50 rounded-lg flex flex-col justify-center items-center gap-10">
        <p>{"다크모드 텍스트"}</p>
        <div className="dark:bg-blue-400 w-96 h-96 bg-codeit_purple rounded-lg dark:center ">
          <div className="transition-all hover:scale-150 w-28 h-28 bg-yellow-300"></div>
        </div>
      </div>

      <div className="flex-row">
        <div className="items-center group inline-flex">
          <button className="rounded-md px-2 py-1 font-medium transition hover:underline">
            Theme Store
          </button>

          <svg className="ml-2 h-5 w-5 opacity-0 transition duration-200 group-hover:opacity-100">
            <path
              d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <div className="group relative max-w-ms cursor-pointer overflow-hidden border-b border-black">
          <svg className="absolute -left-6 top-1/2 h-5 w-5 -translate-x-6 -translate-y-1/2 transform transition-transform duration-300 group-hover:translate-x-6">
            <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"></path>
          </svg>

          <svg className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-0 duration-300 group-hover:translate-x-6">
            <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"></path>
          </svg>

          <span className="ml-2 block translate-x-0 text-lg transform transition-transform font-medium text-black  duration-300 group-hover:translate-x-6">
            {" "}
            Seize every sale{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dark;
