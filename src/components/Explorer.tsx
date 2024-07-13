import { MouseEventHandler, useMemo, useState } from "react";
import { classNames } from "../util";
import defaultChevronDownIcon from "../assets/chevron-down.svg";
import defaultChevronUpIcon from "../assets/chevron-up.svg";
import defaultFolderOpenIcon from "../assets/folder-open.svg";
import defaultFolderClosedIcon from "../assets/folder-closed.svg";
import defaultFileIcon from "../assets/file.svg";

type FileStructure = {
  id: string;
  name: string;
  isFolder: boolean | null;
  items: FileStructure[];
  icon?: string;
};

interface Props {
  explorer: FileStructure;
  icons?: {
    size?: number;
    fileIcon?: string;
    folderOpenIcon?: string;
    folderClosedIcon?: string;
    chevronUpIcon?: string;
    chevronDownIcon?: string;
  };
  level?: number;
}

const DEFAULT_ICON_SIZE = 14;

const VerticalLine = ({ space }: { space: number }) => {
  return (
    <span
      className="absolute border-[0.5px] border-gray-300 h-full z-10"
      style={{
        left: `${space * 4}px`,
      }}
    ></span>
  );
};

const Explorer = ({ explorer, icons, level = 0 }: Props) => {
  const [expand, setExpand] = useState(false);

  const getIcon = (
    localIcon: string | undefined,
    globalIcon: string | undefined,
    defaultIcon: string
  ) => {
    return localIcon ?? globalIcon ?? defaultIcon;
  };

  const fileIcon = useMemo(() => {
    return getIcon(explorer.icon, icons?.fileIcon, defaultFileIcon);
  }, [explorer.icon, icons?.fileIcon]);

  const folderOpenIcon = useMemo(
    () => getIcon(explorer?.icon, icons?.folderOpenIcon, defaultFolderOpenIcon),
    [explorer?.icon, icons?.folderOpenIcon]
  );

  const folderClosedIcon = useMemo(
    () =>
      getIcon(explorer?.icon, icons?.folderClosedIcon, defaultFolderClosedIcon),
    [explorer?.icon, icons?.folderClosedIcon]
  );

  const chevronUpIcon = icons?.chevronUpIcon ?? defaultChevronUpIcon;
  const chevronDownIcon = icons?.chevronDownIcon ?? defaultChevronDownIcon;

  const iconSize = icons?.size ?? DEFAULT_ICON_SIZE;

  const handleOnClick = () => {
    console.log(explorer.id);
  };

  const onClickChevron: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpand(!expand);
  };

  // Return folder
  if (explorer.isFolder) {
    return (
      <div className="flex flex-col relative">
        {level > 0 && <VerticalLine space={level} />}
        <div
          className="flex justify-between px-2 py-1 hover:bg-gray-50 rounded-lg"
          onClick={handleOnClick}
        >
          <span
            className="flex w-full gap-x-1 items-center select-none	cursor-pointer"
            style={{
              paddingLeft: `${level * 4}px`,
            }}
          >
            <img
              src={expand ? folderOpenIcon : folderClosedIcon}
              width={iconSize}
            />
            {explorer.name}
          </span>
          <button
            className="select-none cursor-pointer"
            onClick={onClickChevron}
          >
            <img
              src={expand ? chevronUpIcon : chevronDownIcon}
              width={iconSize}
            />
          </button>
        </div>
        <div
          className={classNames(expand ? "flex flex-col" : "hidden", "py-1")}
        >
          {explorer.items.map((item) => {
            return (
              <Explorer
                explorer={item}
                icons={icons}
                key={item.id}
                level={level + 4}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Return file
  return (
    <div
      className="flex hover:bg-gray-50 rounded-lg px-2 relative"
      style={{
        paddingLeft: `${level * 4}px`,
      }}
    >
      <VerticalLine space={level} />
      <div
        className="flex w-full select-none cursor-pointer px-2 py-1"
        onClick={handleOnClick}
      >
        <img src={fileIcon} width={iconSize} />
        <span>{explorer.name}</span>
      </div>
    </div>
  );
};

export default Explorer;
