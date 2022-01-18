import styles from "./Lighting.module.css";

const Lighting = () => {
  return (
    <div className="border-b-2 border-black">
      <div className="text-center text-black  py-16">
        <h1 id={styles.fontfamilylighting} className="text-3xl">
          (C)
        </h1>
        <h1 id={styles.fontfamilylighting} className="text-5xl">
          Latest Lighting
        </h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 h-full md:w-1/4">
              <div className="h-full  overflow-hidden">
                <div
                  id={styles.firstboxcolorlighting}
                  className="bg-red-400 px-7 py-14"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2F613e6d706bd3291a19891c4c9458d3197ae9547d-2560x2269.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilylighting}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    Coral Fran Stand Lamp
                  </p>
                  <p
                    id={styles.fontfamilylighting}
                    className="  text-xl font-medium text-gray-900 "
                  >
                    by Llot Llov
                  </p>
                  <p
                    id={styles.fontfamilylighting}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    1,500 €
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 h-full md:w-1/4">
              <div className="h-full overflow-hidden">
                <div
                  id={styles.secondboxcolorlighting}
                  className="bg-red-400 px-10 py-20"
                >
                  <img
                    className="h-full w-full object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2Fc520088d972ca8088d13c6135c5f102ac58ceb8a-5819x4337.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilylighting}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    Alteray
                  </p>
                  <p
                    id={styles.fontfamilylighting}
                    className="  text-xl font-medium text-gray-900 "
                  >
                    by Studio Lampent
                  </p>
                  <p
                    id={styles.fontfamilylighting}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    700 €
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 h-full md:w-1/4">
              <div className="h-full  overflow-hidden">
                <div
                  id={styles.thirdboxcolorlighting}
                  className="bg-red-400 px-7 py-20"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2Fe8641a0861c171a1b8ab806aea111717a78b0376-3176x2120.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilylighting}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    Akoya
                  </p>
                  <p
                    id={styles.fontfamilylighting}
                    className="  text-xl font-medium text-gray-900 "
                  >
                    by Johannes Hemann
                  </p>
                  <p
                    id={styles.fontfamilylighting}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    1,200 €
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 h-full md:w-1/4">
              <div className="h-full  overflow-hidden">
                <div
                  id={styles.fourthboxcolorlighting}
                  className="bg-red-400 px-16 py-10"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2Fd8d2be3ffc27d518f0ddef819a4479ce3b38d127-1333x2000.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilylighting}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    Monarch with Brass Dome
                  </p>
                  <p
                    id={styles.fontfamilylighting}
                    className="  text-xl font-medium text-gray-900 "
                  >
                    by Carla Baz
                  </p>
                  <p
                    id={styles.fontfamilylighting}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    3,100 €
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lighting;
