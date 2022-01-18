import styles from "./CoffeeTables.module.css";

const CoffeeTables = () => {
  return (
    <div>
      <div className="text-center text-black py-16">
        <h1 id={styles.fontfamilycoffeetables} className="text-3xl">
          (B)
        </h1>
        <h1 id={styles.fontfamilycoffeetables} className="text-5xl">
          Coffee Tables
        </h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-left">
            <div className="p-4 h-full md:w-1/2">
              <div className="h-full  overflow-hidden">
                <div
                  id={styles.firstboxcolorcoffee}
                  className="bg-red-400 px-9 py-32"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-105 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2F73e26a4739fca8c598d9be3bfdea7972b8058177-2078x1424.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilycoffeetables}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    Ode Three Legged Stool
                  </p>
                  <p
                    id={styles.fontfamilycoffeetables}
                    className="  text-2xl font-medium text-gray-900 "
                  >
                    by Sizar Alexis
                  </p>
                  <p
                    id={styles.fontfamilycoffeetables}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    1600 €
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 h-full md:w-1/2">
              <div className="h-full  overflow-hidden">
                <div
                  id={styles.secondboxcolorcoffee}
                  className="bg-red-400 px-7 py-32"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-105 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2F5338262ea097a5bb79335dd859bef17efda75c8a-2560x1707.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilycoffeetables}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    Ode Three Legged Stool
                  </p>
                  <p
                    id={styles.fontfamilycoffeetables}
                    className="  text-2xl font-medium text-gray-900 "
                  >
                    by Sizar Alexis
                  </p>
                  <p
                    id={styles.fontfamilycoffeetables}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    1600 €
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

export default CoffeeTables;
