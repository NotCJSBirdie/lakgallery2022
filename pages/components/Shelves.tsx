import styles from "./Shelves.module.css";

const Shelves = () => {
  return (
    <div>
      <div className="text-center text-black py-16">
        <h1 id={styles.fontfamilyshelves} className="text-3xl">
          (D)
        </h1>
        <h1 id={styles.fontfamilyshelves} className="text-5xl">
          Shelves
        </h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-left">
            <div className="p-4 h-full md:w-1/2">
              <div className="h-full  overflow-hidden">
                <div
                  id={styles.firstboxcolorshelves}
                  className="bg-red-400 px-8 py-36"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-105 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2Fb7e6e693ebff1791c6237bf9bedba2b37ab7b64e-4932x3288.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilyshelves}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    Stair Shelf
                  </p>
                  <p
                    id={styles.fontfamilyshelves}
                    className="  text-2xl font-medium text-gray-900 "
                  >
                    by Haus Otto
                  </p>
                  <p
                    id={styles.fontfamilyshelves}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    2,500 €
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 h-full md:w-1/2">
              <div className="h-full  overflow-hidden">
                <div
                  id={styles.secondboxcolorshelves}
                  className="bg-red-400 px-7 py-32"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-105 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2F486f230dfdd14c10af8fd8d8e178794d5f662731-7024x5017.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilyshelves}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    Big Spectator
                  </p>
                  <p
                    id={styles.fontfamilyshelves}
                    className="  text-2xl font-medium text-gray-900 "
                  >
                    by Freia Achenbach
                  </p>
                  <p
                    id={styles.fontfamilyshelves}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    11,780 €
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

export default Shelves;
