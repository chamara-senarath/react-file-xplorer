import Explorer from "./components/Explorer";
import GitHubIcon from "./assets/github.svg";
import NpmIcon from "./assets/npm.svg";
import Logo from "./assets/logo.svg";
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

function App() {
  const getFileNameById = (id: string) => {
    return fileStructure.items.find((item) => item.id === id)?.name;
  };

  const handleItemClick = (id: string) => {
    console.log(id);
    console.log(getFileNameById(id));
  };

  const InfoCard = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-full w-10 h-10 shrink-0 text-center">
            🚀
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-900">
              Getting Started
            </h3>
            <p className="text-sm text-gray-500">
              From enrolling your student in Juni to taking your first class
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {/* header */}
      <header className="flex justify-between items-center border-b-[0.5px] border-gray-200 px-8 py-4">
        <div className="flex items-center justify-center gap-x-2">
          <img className="w-6" src={Logo} alt="react-file-xplorer-icon" />
          <h1 className="font-normal text-blue-900 text-2xl">
            React File Xplorer
          </h1>
        </div>
        <div className="flex gap-x-4">
          <button className="flex items-center justify-center rounded-full w-8 h-8 bg-white border-[0.5px] border-blue-900">
            <img className="w-4" src={GitHubIcon} alt="github-icon" />
          </button>
          <button className="flex items-center justify-center rounded-full w-8 h-8 bg-white border-[0.5px] border-blue-900">
            <img className="w-4" src={NpmIcon} alt="npm-icon" />
          </button>
        </div>
      </header>

      {/* body */}
      <main className="flex flex-col items-center gap-y-8 p-8 mb-auto">
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          ipsam iure numquam perferendis illum, veritatis eius rerum laudantium!
          Maiores, consectetur unde. Ea quae laborum officiis facilis id esse?
          Optio, aliquam?
        </p>
        <div className="flex flex-col items-center gap-4 w-full lg:flex-row lg:items-start lg:h-full">
          <div className="flex flex-wrap justify-center gap-4 lg:w-1/3">
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>

          <div className="flex flex-col w-full lg:w-2/3 h-[432px]">
            <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <div className="flex bg-gray-100 rounded-b-lg w-full p-4 h-full gap-x-4 overflow-hidden">
              <div className="bg-white rounded-lg p-2 w-72 shadow-sm overflow-hidden">
                <Explorer
                  fileStructure={fileStructure}
                  onItemClick={handleItemClick}
                />
              </div>
              <div className="bg-white w-full rounded-lg shadow-sm p-2">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="flex justify-between items-center border-t-[0.5px] border-gray-200 px-8 py-4">
        <p className="text-gray-700 text-sm">
          Made with &#9829; and creativity by Chamara Senarath
        </p>
      </footer>
    </div>
  );
}

export default App;
