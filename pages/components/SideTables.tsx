import styles from "./SideTables.module.css";

const SideTables = () => {
  return (
    <div className="border-b-2 border-black">
      <div className="text-center text-black  py-16">
        <h1 id={styles.fontfamilysidetables} className="text-3xl">
          (E)
        </h1>
        <h1 id={styles.fontfamilysidetables} className="text-5xl">
          Side Tables
        </h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 h-full md:w-1/4">
              <div className="h-full  overflow-hidden">
                <div
                  id={styles.firstboxcolorsidetables}
                  className="bg-red-400 px-16 py-10"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2F889da0e72cd25c91a4942d4067c7ea5195db7546-3072x4608.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilysidetables}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    Coral Fran Stand Lamp
                  </p>
                  <p
                    id={styles.fontfamilysidetables}
                    className="  text-xl font-medium text-gray-900 "
                  >
                    by Llot Llov
                  </p>
                  <p
                    id={styles.fontfamilysidetables}
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
                  id={styles.secondboxcolorsidetables}
                  className="bg-red-400 px-7 py-20"
                >
                  <img
                    className="h-full w-full object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2Fdc0cfc128d304e0d07b76e944e9ec3a127e33377-2000x1333.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilysidetables}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    Alteray
                  </p>
                  <p
                    id={styles.fontfamilysidetables}
                    className="  text-xl font-medium text-gray-900 "
                  >
                    by Studio Lampent
                  </p>
                  <p
                    id={styles.fontfamilysidetables}
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
                  id={styles.thirdboxcolorsidetables}
                  className="bg-red-400 px-16 py-10"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2Fd6fc45d5d49433543c93f7d96a37417c911f6fb7-2000x3000.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilysidetables}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    Akoya
                  </p>
                  <p
                    id={styles.fontfamilysidetables}
                    className="  text-xl font-medium text-gray-900 "
                  >
                    by Johannes Hemann
                  </p>
                  <p
                    id={styles.fontfamilysidetables}
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
                  id={styles.fourthboxcolorsidetables}
                  className="bg-red-400 px-16 py-11"
                >
                  <img
                    className="h-auto w-auto object-cover object-center hover:scale-110 ease-in-out transition-all"
                    src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7ovaqeih%2Fproduction%2F4a259c944c887067e39c24fcc25df1894fdbbd34-2501x3671.jpg%3Fw%3D750&w=1920&q=100"
                    alt="blog"
                  />
                </div>

                <div className="">
                  <p
                    id={styles.fontfamilysidetables}
                    className=" text-xl font-medium text-gray-900 "
                  >
                    Monarch with Brass Dome
                  </p>
                  <p
                    id={styles.fontfamilysidetables}
                    className="  text-xl font-medium text-gray-900 "
                  >
                    by Carla Baz
                  </p>
                  <p
                    id={styles.fontfamilysidetables}
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

export default SideTables;
