import GitHubIcon from "./assets/github.svg";
import NpmIcon from "./assets/npm.svg";
import Logo from "./assets/logo.svg";
import { ComponentProps, useState } from "react";
import FeatureNavigationIcon from "./assets/feature-navigation.svg";
import FeatureCustomizableIconsIcon from "./assets/feature-customizable-icons.svg";
import FeatureTypeScriptSupportIcon from "./assets/feature-ts-support.svg";
import FeatureEventHandlingIcon from "./assets/feature-event-handling.svg";
import { Explorer } from "../lib/main";

type FileStructure = ComponentProps<typeof Explorer>["fileStructure"];
type FileItem = Pick<FileStructure, "id" | "name" | "isFolder">;
type Node = FileItem & { items: Node[] };

const fileStructure = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "106",
      name: "components",
      isFolder: true,
      items: [
        {
          id: "107",
          name: "Header.jsx",
          isFolder: false,
          items: [],
        },
        {
          id: "108",
          name: "Footer.jsx",
          isFolder: false,
          items: [],
        },
        {
          id: "109",
          name: "layout.css",
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
    {
      id: "110",
      name: "README.md",
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

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border-gray-200 border-[0.5px] p-4 max-w-sm">
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

const InstallInstructions = () => {
  const [copied, setCopied] = useState(false);
  const installCommand = "npm install react-file-xplorer";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-gray-50 p-1 shadow-sm">
      <div className="flex items-center justify-between rounded-md bg-white px-4 py-3">
        <code className="font-mono text-sm text-gray-700">
          $ {installCommand}
        </code>
        <button
          onClick={handleCopy}
          className="ml-4 rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          aria-label={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

function App() {
  const [currentId, setCurrentId] = useState("1");

  const flattenStructure = (structure: FileStructure) => {
    const result: FileItem[] = [];

    function traverse(node: Node) {
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
            href="https://github.com/chamara-senarath/react-file-xplorer"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full w-8 h-8 bg-white border-[0.5px] border-[#2563EB]/20 hover:bg-[#2563EB]/10"
          >
            <img className="w-4" src={GitHubIcon} alt="github-icon" />
          </a>
          <a
            href="https://www.npmjs.com/package/react-file-xplorer"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full w-8 h-8 bg-white border-[0.5px] border-[#2563EB]/20 hover:bg-[#2563EB]/10"
          >
            <img className="w-4" src={NpmIcon} alt="npm-icon" />
          </a>
        </div>
      </header>

      {/* body */}
      <main className="flex flex-col gap-y-4 lg:gap-y-16 py-8 px-[10vw] mb-auto">
        <p className="text-gray-700 text-sm md:text-md lg:text-lg">
          A lightweight, customizable file explorer component for React
          applications that provides an intuitive interface for displaying
          hierarchical file and folder structures. This component offers a
          clean, modern design with smooth interactions and extensive
          customization options.
        </p>
        <div className="flex flex-col items-center gap-4 w-full lg:flex-row lg:items-start lg:h-full">
          <div className="flex flex-wrap justify-center gap-4 lg:w-1/3 lg:justify-start">
            {infoCardsData.map((card, index) => (
              <FeatureCard
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
        <div className="flex justify-center lg:fixed bottom-20 w-[80vw]">
          <InstallInstructions />
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
