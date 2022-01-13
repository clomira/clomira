import { useState, useEffect } from "react";

type propType = {
  fileType: string;
  heading: string;
  size?: string;
};

function Subject(props: propType) {
  const [fileIcon, setFileIcon] = useState(
    "far fa-file-alt mr-3 text-yellow-300 fa-2x"
  );

  useEffect(() => {
    switch (props.fileType) {
      case "file": {
        setFileIcon("fas fa-file-pdf text-red-500 fa-lg");
        break;
      }
      case "folder": {
        setFileIcon("fas fa-folder text-green-500 fa-lg");
      }
    }
  }, [fileIcon]);

  return (
    <div className="flex mt-2 pt-2 border-b-2 pb-2">
      <div className="flex w-8/12">
        <i className={fileIcon}></i>
        <div className="pl-1  ml-3">{props.heading}</div>
      </div>
      <div className="pr-24 ">{props.size}</div>
      <div className="mr-12 hover:text-blue-700 cursor-pointer">
        <i className="fas fa-file-download fa-lg "></i>
      </div>
      <div className="px-4 cursor-pointer hover:text-yellow-300">
        <i className="far fa-star fa-lg"></i>
      </div>
    </div>
  );
}

export default Subject;
