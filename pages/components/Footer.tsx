import styles from "./Footer.module.css";
import Dropdown from "./Dropdown";

const Footer = () => {
  return (
    <div>
      <footer className="text-black body-font">
        <div className="container px-5 py-24 mx-auto flex  md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-2/5 flex flex-col items-center mx-auto text-center md:text-left md:mt-0 mt-10">
            <div className="w-full px-4">
              <div className="flex flex-col items-center md:items-start">
                <h2
                  id={styles.fontfamilyfooter}
                  className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 w-56"
                >
                  Join our newsletter
                </h2>
              </div>

              <div className="flex flex-col items-center md:items-start w-full">
                <div className="flex flex-row items-center border-b-2 border-black">
                  <input
                    id={styles.inputwidth}
                    className="py-2 px-full text-left w-80 outline-none text-xl md:w-96"
                    placeholder="Your email"
                  ></input>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-up-right"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#000000"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="17" y1="7" x2="7" y2="17" />
                      <polyline points="8 7 17 7 17 16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow flex flex-wrap md:pr-20  md:text-left text-center order-first md:w-3/5 ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                id={styles.fontfamilyfooter}
                className="title-font  text-gray-900 tracking-widest text-sm mb-3"
              >
                About
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    id={styles.fontfamilyfooter}
                    className="text-gray-600 hover:text-gray-800 text-xl font-medium"
                  >
                    Pieces
                  </a>
                </li>
                <li>
                  <a
                    id={styles.fontfamilyfooter}
                    className="text-gray-600 hover:text-gray-800 text-xl font-medium"
                  >
                    Designers
                  </a>
                </li>
                <li>
                  <a
                    id={styles.fontfamilyfooter}
                    className="text-gray-600 hover:text-gray-800 text-xl font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    id={styles.fontfamilyfooter}
                    className="text-gray-600 hover:text-gray-800 text-xl font-medium"
                  >
                    Contact
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-center md:items-start">
              <h2
                id={styles.fontfamilyfooter}
                className="title-font text-gray-900 tracking-widest text-sm mb-3"
              >
                Contact
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    id={styles.fontfamilyfooter}
                    className="text-gray-600 hover:text-gray-800 text-xl font-medium"
                  >
                    info@lakgallery.com
                  </a>
                </li>
                <li>
                  <a
                    id={styles.fontfamilyfooter}
                    className="text-gray-600 hover:text-gray-800 opacity-0 text-xl font-medium"
                  >
                    Empty Trick
                  </a>
                </li>
                <div className="flex flex-col items-center md:items-start text-xl font-medium">
                  <div className="flex flex-row items-center">
                    <a
                      id={styles.fontfamilyfooter}
                      className="text-gray-600 hover:text-gray-800  flex"
                    >
                      Instagram
                    </a>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-up-right"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#000000"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="17" y1="7" x2="7" y2="17" />
                        <polyline points="8 7 17 7 17 16" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div
                  id={styles.fontfamilyfooter}
                  className="flex flex-col items-center md:items-start text-xl font-medium"
                >
                  <div className="flex flex-row items-center">
                    <a className="text-gray-600 hover:text-gray-800 flex">
                      Pinterest
                    </a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-up-right"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#000000"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="17" y1="7" x2="7" y2="17" />
                        <polyline points="8 7 17 7 17 16" />
                      </svg>
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full">
          <Dropdown />
        </div>

        <div className="bg-transparent px-5 py-10">
          <div className="flex flex-col items-center md:flex-row  ">
            <div className="w-2/3 flex flex-col items-center md:flex-row md:text-left text-center justify-between">
              <div className="w-full md:w-1/3 p-4 ">Terms & Conditions</div>
              <div className="w-full md:w-1/3 p-4">Privacy Policy</div>
              <div className="w-full md:w-1/3 p-4">Developed by Tinloof</div>
            </div>
            <div className="w-1/3 flex flex-col items-center md:justify-end md:flex-row">
              <div className="w-56 md:text-right text-center p-4">
                © LAK Gallery 2022
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
