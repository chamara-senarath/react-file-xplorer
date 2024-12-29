import Explorer from "./components/Explorer";
import GitHubIcon from "./assets/github.svg";
import NpmIcon from "./assets/npm.svg";
import Logo from "./assets/logo.svg";
import { useState } from "react";
import FeatureNavigationIcon from "./assets/feature-navigation.svg";
import FeatureCustomizableIconsIcon from "./assets/feature-customizable-icons.svg";
import FeatureTypeScriptSupportIcon from "./assets/feature-ts-support.svg";
import FeatureEventHandlingIcon from "./assets/feature-event-handling.svg";

const fileStructure = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          items: [],
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

const infoCardsData = [
  {
    title: "Intuitive Navigation",
    description:
      "Clean hierarchical display of files and folders with expandable/collapsible directories",
    icon: FeatureNavigationIcon,
  },
  {
    title: "Fully Customizable Icons",
    description:
      "Support for custom icons for files, folders (open/closed states), and chevrons",
    icon: FeatureCustomizableIconsIcon,
  },
  {
    title: "TypeScript Support",
    description: "Fully typed component for better development experience",
    icon: FeatureTypeScriptSupportIcon,
  },
  {
    title: "Event Handling",
    description:
      "Built-in click handlers for both files and folders with customizable callbacks",
    icon: FeatureEventHandlingIcon,
  },
];

function App() {
  const [currentId, setCurrentId] = useState("1");

  const flattenStructure = (structure: any) => {
    const result: any = [];

    function traverse(node: any) {
      result.push({
        id: node.id,
        name: node.name,
        isFolder: node.isFolder,
      });

      if (node.items && node.items.length > 0) {
        node.items.forEach(traverse);
      }
    }

    traverse(structure);

    return result;
  };

  const flatStructure = flattenStructure(fileStructure);

  const getFileNameById = (id: string) => {
    return flatStructure.find((item: any) => item.id === id)?.name;
  };

  const handleItemClick = (id: string) => {
    setCurrentId(id);
  };

  const InfoCard = ({
    title,
    description,
    icon,
  }: {
    title: string;
    description: string;
    icon: string;
  }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-full w-10 h-10 shrink-0">
            <img src={icon} alt={`feature-${title}`} />
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  const isFolder = (id: string) => {
    return flatStructure.find((item: any) => item.id === id)?.isFolder;
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {/* header */}
      <header className="flex justify-between items-center border-b-[0.5px] border-gray-200 px-[10vw] py-4">
        <div className="flex items-center justify-center gap-x-2">
          <img className="w-8" src={Logo} alt="react-file-xplorer-icon" />
          <h1 className="font-normal text-[#2563EB] text-2xl">
            React File Xplorer
          </h1>
        </div>
        <div className="flex gap-x-4">
          <a
            href=""
            className="flex items-center justify-center rounded-full w-8 h-8 bg-white border-[0.5px] border-[#2563EB]/20 hover:bg-[#2563EB]/10"
          >
            <img className="w-4" src={GitHubIcon} alt="github-icon" />
          </a>
          <a className="flex items-center justify-center rounded-full w-8 h-8 bg-white border-[0.5px] border-[#2563EB]/20 hover:bg-[#2563EB]/10">
            <img className="w-4" src={NpmIcon} alt="npm-icon" />
          </a>
        </div>
      </header>

      {/* body */}
      <main className="flex flex-col gap-y-8 py-8 px-[10vw] mb-auto">
        <p className="text-gray-700 text-sm md:text-md">
          A lightweight, customizable file explorer component for React
          applications that provides an intuitive interface for displaying
          hierarchical file and folder structures. This component offers a
          clean, modern design with smooth interactions and extensive
          customization options.
        </p>
        <div className="flex flex-col items-center gap-4 w-full lg:flex-row lg:items-start lg:h-full">
          <div className="flex flex-wrap justify-center gap-4 lg:w-1/3 lg:justify-start">
            {infoCardsData.map((card, index) => (
              <InfoCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>

          <div className="flex flex-col w-full lg:w-2/3 h-[432px]">
            <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <div className="flex flex-col md:flex-row bg-gray-100 rounded-b-lg w-full p-4 h-full gap-4 overflow-hidden">
              <div className="flex shrink-0 bg-white rounded-lg p-2 min-w-[220px] max-h-[200px] md:max-h-full h-full shadow-sm overflow-auto">
                <Explorer
                  fileStructure={fileStructure}
                  onItemClick={handleItemClick}
                  isRootExpanded={true}
                />
              </div>
              <div className="flex flex-col justify-center items-center bg-white w-full h-full rounded-lg shadow-sm p-2">
                <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  {currentId === "1"
                    ? "Let's Play with Files"
                    : getFileNameById(currentId)}
                </h1>
                <p className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
                  {currentId === "1"
                    ? "Click on a file to get started"
                    : isFolder(currentId)
                    ? "folder"
                    : "file"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="flex w-full justify-center items-center border-t-[0.5px] border-gray-200 px-8 py-4">
        <span className="text-gray-700 text-sm text-center">
          Made with &#9829; and creativity by{" "}
          <a
            className="text-[#2563EB]/80"
            target="_blank"
            rel="noreferrer"
            href="https://www.chamarasenarath.com"
          >
            Chamara Senarath
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
