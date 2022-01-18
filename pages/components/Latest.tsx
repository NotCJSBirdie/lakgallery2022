import styles from "./Latest.module.css";

const Latest = () => {
  return (
    <div className="border-b-2 border-black">
      <div className="text-center text-black  py-16">
        <h1 id={styles.fontfamilylatest} className="text-3xl">
          (A)
        </h1>
        <h1 id={styles.fontfamilylatest} className="text-5xl">
          Latest Seating
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 h-full md:w-1/3">
              <div className="h-full  overflow-hidden">
                <div
                  id={styles.firstboxcolorlatest}
                  className="bg-red-400 px-7 py-32"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2Ff55d98f52201f06e84d3d713d1ef726218fac9aa-3877x2624.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilylatest}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    Ode Three Legged Stool
                  </p>
                  <p
                    id={styles.fontfamilylatest}
                    className="  text-2xl font-medium text-gray-900 "
                  >
                    by Sizar Alexis
                  </p>
                  <p
                    id={styles.fontfamilylatest}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    1600 €
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4  h-full md:w-1/3">
              <div className="h-full overflow-hidden">
                <div
                  id={styles.secondboxcolorlatest}
                  className="bg-red-400 px-10 py-12"
                >
                  <img
                    className="h-full w-full object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2F11bcda4ce81fdb0dacb4cff683469c5a5ca3a2a0-1536x1920.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilylatest}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    Black Oak Stool
                  </p>
                  <p
                    id={styles.fontfamilylatest}
                    className="  text-2xl font-medium text-gray-900 "
                  >
                    by Robin Berrewaerts
                  </p>
                  <p
                    id={styles.fontfamilylatest}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    1,280 €
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4  h-full md:w-1/3">
              <div className="h-full  overflow-hidden">
                <div
                  id={styles.thirdboxcolorlatest}
                  className="bg-red-400 px-20 py-12"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2F9dbf94bec531dde36a7e918b97111c161134e81e-3386x5699.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilylatest}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    Black Ode Chair
                  </p>
                  <p
                    id={styles.fontfamilylatest}
                    className="  text-2xl font-medium text-gray-900 "
                  >
                    by Sizar Alexis
                  </p>
                  <p
                    id={styles.fontfamilylatest}
                    className=" text-2xl font-medium text-gray-900 "
                  >
                    3,700 €
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

export default Latest;
