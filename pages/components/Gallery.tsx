import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className="">
      <div className="text-center text-black  py-16">
        <h1 id={styles.fontfamilygallery} className="text-3xl">
          (G)
        </h1>
        <h1 id={styles.fontfamilygallery} className="text-5xl">
          @lakgallery_
        </h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 h-full md:w-1/4">
              <div className="h-full  overflow-hidden">
                <img
                  className="h-auto w-auto object-cover object-center "
                  src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fwww.instagram.com%2Fp%2FCYjA4fmovPN%2Fmedia%2F%3Fsize%3Dl&w=640&q=100"
                  alt="blog"
                />
              </div>
            </div>
            <div className="p-4 h-full md:w-1/4">
              <img
                className="h-full w-full object-cover object-center "
                src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fwww.instagram.com%2Fp%2FCYZCT4AooQv%2Fmedia%2F%3Fsize%3Dl&w=640&q=100"
                alt="blog"
              />
            </div>
            <div className="p-4 h-full md:w-1/4">
              <div className="h-full  overflow-hidden">
                <img
                  className="h-auto w-auto object-cover object-center "
                  src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fwww.instagram.com%2Fp%2FCYUNUtFoLNW%2Fmedia%2F%3Fsize%3Dl&w=640&q=100"
                  alt="blog"
                />
              </div>
            </div>
            <div className="p-4 h-full md:w-1/4">
              <div className="h-full  overflow-hidden">
                <img
                  className="h-auto w-auto object-cover object-center "
                  src="https://www.lakgallery.com/_next/image?url=https%3A%2F%2Fwww.instagram.com%2Fp%2FCYHAvrIoX9k%2Fmedia%2F%3Fsize%3Dl&w=640&q=100"
                  alt="blog"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
