import { MouseEventHandler, useEffect, useMemo, useState } from "react";
import defaultChevronDownIcon from "../../assets/chevron-down.svg";
import defaultChevronUpIcon from "../../assets/chevron-up.svg";
import defaultFolderOpenIcon from "../../assets/folder-open.svg";
import defaultFolderClosedIcon from "../../assets/folder-closed.svg";
import defaultFileIcon from "../../assets/file.svg";
import "./index.css";

type FileStructure = {
  id: string;
  name: string;
  isFolder: boolean | null;
  items: FileStructure[];
  icon?: string;
};

interface Props {
  fileStructure: FileStructure;
  icons?: {
    size?: number;
    fileIcon?: string;
    folderOpenIcon?: string;
    folderClosedIcon?: string;
    chevronUpIcon?: string;
    chevronDownIcon?: string;
  };
  level?: number;
  onItemClick?: (id: string) => void;
  isRootExpanded?: boolean;
}

const DEFAULT_ICON_SIZE = 14;

const VerticalLine = ({ space }: { space: number }) => {
  return (
    <span
      className="vertical-line"
      style={{
        left: `${space * 4}px`,
      }}
    ></span>
  );
};

export const Explorer = ({
  fileStructure,
  icons,
  level = 0,
  onItemClick,
  isRootExpanded = false,
}: Props) => {
  const [expand, setExpand] = useState(false);

  const getIcon = (
    localIcon: string | undefined,
    globalIcon: string | undefined,
    defaultIcon: string
  ) => {
    return localIcon ?? globalIcon ?? defaultIcon;
  };

  const fileIcon = useMemo(() => {
    return getIcon(fileStructure.icon, icons?.fileIcon, defaultFileIcon);
  }, [fileStructure.icon, icons?.fileIcon]);

  const folderOpenIcon = useMemo(
    () =>
      getIcon(
        fileStructure?.icon,
        icons?.folderOpenIcon,
        defaultFolderOpenIcon
      ),
    [fileStructure?.icon, icons?.folderOpenIcon]
  );

  const folderClosedIcon = useMemo(
    () =>
      getIcon(
        fileStructure?.icon,
        icons?.folderClosedIcon,
        defaultFolderClosedIcon
      ),
    [fileStructure?.icon, icons?.folderClosedIcon]
  );

  const chevronUpIcon = icons?.chevronUpIcon ?? defaultChevronUpIcon;
  const chevronDownIcon = icons?.chevronDownIcon ?? defaultChevronDownIcon;

  const iconSize = icons?.size ?? DEFAULT_ICON_SIZE;

  const handleOnClick = () => {
    if (onItemClick) onItemClick(fileStructure.id);
  };

  const onClickChevron: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpand(!expand);
  };

  // Set root expand
  useEffect(() => {
    setExpand(isRootExpanded);
  }, [isRootExpanded]);

  // Return folder
  if (fileStructure.isFolder) {
    return (
      <div className="explorer-folder">
        {level > 0 && <VerticalLine space={level} />}
        <div className="folder-header" onClick={handleOnClick}>
          <span
            className="folder-name"
            style={{ paddingLeft: `${level * 4}px` }}
          >
            <img
              src={expand ? folderOpenIcon : folderClosedIcon}
              width={iconSize}
            />
            {fileStructure.name}
          </span>
          <button className="folder-chevron" onClick={onClickChevron}>
            <img
              src={expand ? chevronUpIcon : chevronDownIcon}
              width={iconSize}
            />
          </button>
        </div>
        <div className={`folder-contents ${expand ? "expanded" : "collapsed"}`}>
          {fileStructure.items.map((item) => {
            return (
              <Explorer
                fileStructure={item}
                icons={icons}
                key={item.id}
                level={level + 4}
                onItemClick={onItemClick}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Return file
  return (
    <div className="explorer-file" style={{ paddingLeft: `${level * 4}px` }}>
      <VerticalLine space={level} />
      <div className="file-item" onClick={handleOnClick}>
        <img src={fileIcon} width={iconSize} />
        <span>{fileStructure.name}</span>
      </div>
    </div>
  );
};
