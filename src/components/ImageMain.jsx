import { useState } from "react";

const ImageMain = () => {
  const [image, setImage] = useState(null);
  const [convertedImagePath, setConvertedImagePath] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setConvertedImagePath(null); // Reset converted image path when a new image is selected
  };

  const cancelImage = () => {
    setImage(null);
    setConvertedImagePath(null);
  };

  const imageSubmit = () => {
    if (!image) {
      console.log("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse response body as JSON
        } else {
          throw new Error("Failed to submit image");
        }
      })
      .then((data) => {
        if (data.filePath) {
          setConvertedImagePath(data.filePath); // Set the path of the converted image
        } else {
          throw new Error("Invalid response from server");
        }
      })
      .catch((error) => {
        console.error("Error occurred while submitting image:", error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <main id="image" className={`  flex flex-col lg:flex-row mt-20 gap-8 items-center justify-center`}>
      <section className="">
        <h1 className="flex gap-4 p-2  text-orange-300  font-serif text-6xl ">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="46" viewBox="0 0 100 100" fill-rule="nonzero">
              <path d="M16.024 0h67.95c5.572 0 7.593.58 9.63 1.67s3.636 2.688 4.725 4.725 1.67 4.058 1.67 9.63v67.95c0 5.572-.58 7.593-1.67 9.63s-2.688 3.636-4.725 4.725-4.058 1.67-9.63 1.67h-67.95c-5.572 0-7.593-.58-9.63-1.67S2.76 95.642 1.67 93.605 0 89.548 0 83.976v-67.95c0-5.572.58-7.593 1.67-9.63S4.358 2.76 6.395 1.67 10.452 0 16.024 0z" fill="#AB6993"></path>
              <g fill="#fff">
                <path d="M20 82l5.544-21.956L58.59 27 75 43.41 41.956 76.456 20 82zm9.536-19.738L26.2 75.79l13.528-3.327L68.8 43.41 58.59 33.21 29.536 62.262z"></path>
                <path d="M37.93 74c-1.286-5.357-5.57-9.643-10.93-10.93L28.07 59C34.93 60.714 40.286 66.07 42 72.93L37.93 74z"></path>
                <path d="M63.863 35L67 38.135 38.137 67 35 63.87zM23 78l6-1.448c-.62-2.276-2.276-3.93-4.552-4.552L23 78zm53.2-36L60 25.635 66.57 19l1.095.22c7.886 1.106 14.02 7.298 15.114 15.26l.22 1.105L76.2 42zM66.133 25.635L76.2 35.808l1.97-2c-1.095-5.086-5.038-9.067-10.076-10.173l-1.97 2z"></path>
              </g>
            </svg>
          </span>
          Image Flare Removal
        </h1>
        <p className="m-2 font-mono  text-xl">
          Removes Flares from the Image. Edit your photos online
        </p>
      </section>
      <div className="m-2 w-2/3 md:w-1/3 ">
        {image ? (
          <div className="flex flex-col flex-wrap md:flex-nowrap justify-center items-center gap-10">
            <div className=" relative">
              <img src={URL.createObjectURL(image)} alt="image" />
              <span
                onClick={cancelImage}
                className="absolute top-1 right-0 bg-red-800 w-6 text-center text-white hover:cursor-pointer z-5"
              >
                X
              </span>
            </div>
            <button onClick={imageSubmit} className=" m-2 bg-blue-400 hover:bg-blue-800 hover:cursor-pointer text-white px-8 py-2 rounded-lg">
              Convert
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        )}
        {convertedImagePath && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Converted Image:</h2>
            <img src={convertedImagePath} alt="converted image" />
          </div>
        )}
      </div>
    </main>
  );
};

export default ImageMain;
