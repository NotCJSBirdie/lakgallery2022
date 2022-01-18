import styles from "./Header.module.css";
import useCollapse from "react-collapsed";
import { useState } from "react";

const Header = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-narrow-up ml-1 ease-in-out transition-all pointer-events-auto"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#000000"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="16" y1="9" x2="12" y2="5" />
    <line x1="8" y1="9" x2="12" y2="5" />
  </svg>;

  const [arrow, setArrow]: any = useState(false);

  return (
    <div className="">
      <header className="text-black body-font border-b-2 border-black ">
        <div className="container mx-auto flex flex-nowrap p-5 flex-col md:flex-row items-center">
          <nav className=" md:w-1/5 items-center text-base md:ml-auto">
            <a id={styles.fontfamily} className=" hover:text-gray-900 text-3xl">
              LAK Gallery
            </a>
          </nav>

          <div
            className="flex flex-row order-third lg:order-none lg:w-3/5 title-font font-medium items-center text-black  lg:justify-center  md:mb-0 active:transition-transform"
            onClick={() => setArrow(!arrow)}
          >
            <button className="flex flex-row" {...getToggleProps()}>
              <span className="text-3xl">Menu</span>
              <div>
                {arrow ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-narrow-up ml-1 ease-in-out transition-all pointer-events-auto -rotate-180"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="16" y1="9" x2="12" y2="5" />
                    <line x1="8" y1="9" x2="12" y2="5" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-narrow-up ml-1 ease-in-out transition-all pointer-events-auto"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="16" y1="9" x2="12" y2="5" />
                    <line x1="8" y1="9" x2="12" y2="5" />
                  </svg>
                )}
              </div>
            </button>
          </div>

          {isExpanded ? "" : ""}

          <nav className=" md:w-1/5 items-center text-base md:ml-auto text-right">
            <a className="hover:text-black text-3xl">Cart (0)</a>
          </nav>
        </div>
      </header>

      <div className="px-5 py-10">
        <section {...getCollapseProps()}>
          <h1 id={styles.reactcollapse}>Pieces</h1>
          <h1 id={styles.reactcollapse}>Designers</h1>
          <h1 id={styles.reactcollapse}>About</h1>
          <h1 id={styles.reactcollapse}>Contact</h1>
        </section>
      </div>
    </div>
  );
};

export default Header;
