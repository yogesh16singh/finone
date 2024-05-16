import { useState } from "react";

const VideoMain = () => {
  const [video, setVideo] = useState(null);

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const cancelVideo = () => {
    setVideo(null);
  };
  const videoSubmit = () => {
    if (!video) {
      console.log("No video selected");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);
    console.log("video",video);
    fetch("YOUR_BACKEND_ENDPOINT_URL", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Video submitted successfully");
          // Handle success, e.g., show a success message
        } else {
          console.error("Failed to submit video");
          // Handle error, e.g., show an error message
        }
      })
      .catch((error) => {
        console.error("Error occurred while submitting video:", error);
        // Handle error, e.g., show an error message
      });
  };
  return (
    <main id="video" className={` flex flex-col lg:flex-row gap-8 my-20 items-center justify-center`}>
    
      <div className="m-2 w-2/3 md:w-1/3 ">
        {video ? (
          <div className="flex flex-col flex-wrap md:flex-nowrap justify-center items-center gap-10">
            <div className="relative">
              <video src={URL.createObjectURL(video)} controls className="w-full" />
              <span
                onClick={() => cancelVideo()}
                className="absolute top-1 right-0 bg-red-800 w-6 text-center text-white hover:cursor-pointer z-5"
              >
                X
              </span>
            </div>
            <button onClick={()=>videoSubmit()} className=" m-2 bg-blue-400 hover:bg-blue-800 hover:cursor-pointer text-white px-8 py-2 rounded-lg">
              Convert
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-video"
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
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  MP4, AVI, or MOV files
                </p>
              </div>
              <input
                id="dropzone-video"
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => handleVideoChange(e)}
              />
            </label>
          </div>
        )}
      </div>
      <section className="">
      <h1 className="m-2 gap-4 flex text-end text-green-300 font-serif text-6xl">
        <span><svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 40.32V7.68c0-2.671.25-3.673.835-4.591A4.914 4.914 0 0 1 3.089.835C4.09.334 5.009 0 7.68 0h32.64c2.671 0 3.673.25 4.591.835a4.914 4.914 0 0 1 2.254 2.254C47.666 4.09 48 5.009 48 7.68v32.64c0 2.671-.25 3.673-.835 4.591-.584.919-1.252 1.753-2.254 2.254-1.001.501-1.92.835-4.591.835H7.68c-2.671 0-3.673-.25-4.591-.835a4.914 4.914 0 0 1-2.254-2.254C.25 43.993 0 42.991 0 40.32Z" fill="#8FBC5D"></path><path fill="#5F8C30" d="M24 39h-5v-5h5zM24 29h-5v-5h5zM24 19h-5v-5h5zM19 34h-5v-5h5zM19 24h-5v-5h5zM19 14h-5V9h5zM14 39h-1a4 4 0 0 1-4-4v-1h5v5ZM14 29H9v-5h5zM14 19H9v-5h5zM24 9h5v5h-5zM24 19h5v5h-5zM24 29h5v5h-5zM29 14h5v5h-5zM29 24h5v5h-5zM29 34h5v5h-5zM34 9h3a2 2 0 0 1 2 2v3h-5V9ZM34 19h5v5h-5zM34 29h5v5h-5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.128 9.778h21.744c.844 0 1.323.045 1.628.104.263.05.42.115.615.22.342.183.6.44.783.783.105.196.17.352.22.615.059.305.104.784.104 1.628v14.195l-6.496-6.46a1.441 1.441 0 0 0-2.03 0l-17.66 17.324a4.933 4.933 0 0 1-.536-.069 1.949 1.949 0 0 1-.615-.22c-.342-.183-.6-.44-.783-.783a1.948 1.948 0 0 1-.22-.615c-.059-.305-.104-.784-.104-1.628V13.128c0-.844.045-1.323.104-1.628.05-.263.115-.42.22-.615.183-.342.44-.6.783-.783.196-.105.352-.17.615-.22.305-.059.784-.104 1.628-.104Zm0-1.778h21.744c1.783 0 2.43.186 3.082.534.651.349 1.163.86 1.512 1.512.348.652.534 1.299.534 3.082v21.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H13.128c-1.783 0-2.43-.186-3.082-.534a3.635 3.635 0 0 1-1.512-1.512C8.186 37.302 8 36.655 8 34.872V13.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C10.698 8.186 11.345 8 13.128 8Z" fill="#E5F5D2"></path><path d="M14 18.094a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" fill="#E5F5D2"></path></svg></span>
        Video Background Removal
      </h1>
      <p className="m-2  font-mono text-xl">
        Remove Background from the Video. Edit your videos online
      </p>
      </section>
    </main>
  );
};

export default VideoMain;
