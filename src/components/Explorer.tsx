import React, { useState } from "react";
import { classNames } from "../util";
import chevronDownIcon from "../assets/chevron-down.svg";
import chevronUpIcon from "../assets/chevron-up.svg";
import folderOpenIcon from "../assets/folder-open.svg";
import folderClosedIcon from "../assets/folder-closed.svg";
import fileIcon from "../assets/file.svg";

type FileStructure = {
  id: string;
  name: string;
  isFolder: boolean | null;
  items: FileStructure[];
  icon?: string;
};

interface Props {
  explorer: FileStructure;
}

const Explorer = ({ explorer }: Props) => {
  const [expand, setExpand] = useState(false);

  const handleOnClick = () => {
    console.log(explorer.id);
  };

  // Return folder
  if (explorer.isFolder) {
    return (
      <div className="flex flex-col">
        <div className="flex justify-between" onClick={handleOnClick}>
          <span className="flex w-full gap-x-1 items-center select-none	cursor-pointer">
            <img src={expand ? folderOpenIcon : folderClosedIcon} width={12} />
            {explorer.name}
          </span>
          <button
            className="select-none	cursor-pointer"
            onClick={() => setExpand(!expand)}
          >
            <img src={expand ? chevronUpIcon : chevronDownIcon} width={12} />
          </button>
        </div>
        <div
          className={classNames(expand ? "flex flex-col" : "hidden", "pl-2")}
        >
          {explorer.items.map((item) => {
            return <Explorer explorer={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }

  // Return file
  return (
    <span
      onClick={handleOnClick}
      className="flex gap-x-1 select-none	cursor-pointer"
    >
      <img src={fileIcon} width={12} /> {explorer.name}
    </span>
  );
};

export default Explorer;
