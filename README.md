# React File Xplorer

<div align="center">
  <img src="./assets/logo.svg" alt="React File xplorer Logo" width="180" />
</div>

A lightweight, customizable file xplorer component for React applications. Create beautiful hierarchical file and folder structures with minimal setup and maximum flexibility.

[![NPM version](https://img.shields.io/npm/v/react-file-xplorer)](https://www.npmjs.com/package/react-file-xplorer)

<!-- [![License](https://img.shields.io/npm/l/react-file-xplorer)](https://github.com/chamara-senarath/react-file-xplorer/blob/main/LICENSE) -->

## ✨ Features

- 🎯 **Simple to Use**: Drop-in component with minimal configuration required
- 🎨 **Fully Customizable**: Custom icons, sizes, and styling options
- 📱 **Responsive**: Works seamlessly across all device sizes
- 🌳 **Visual Hierarchy**: Clear parent-child relationships with guide lines
- 🔍 **Type Safe**: Written in TypeScript for reliable development

## 🚀 Installation

```bash
npm install react-file-xplorer
# or
yarn add react-file-xplorer
# or
pnpm add react-file-xplorer
```

## 📖 Usage

```tsx
import Explorer from "react-file-xplorer";

const fileStructure = {
  id: "root",
  name: "Project",
  isFolder: true,
  items: [
    {
      id: "src",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "app",
          name: "app.tsx",
          isFolder: false,
          items: [],
        },
      ],
    },
  ],
};

function App() {
  const handleItemClick = (id: string) => {
    console.log("Clicked item:", id);
  };

  return (
    <Explorer
      fileStructure={fileStructure}
      onItemClick={handleItemClick}
      isRootExpanded={true}
    />
  );
}
```

## ⚙️ Props

| Prop             | Type                   | Default       | Description                                |
| ---------------- | ---------------------- | ------------- | ------------------------------------------ |
| `fileStructure`  | `FileStructure`        | Required      | The hierarchical data structure to display |
| `icons`          | `IconOptions`          | Default icons | Custom icons for files and folders         |
| `level`          | `number`               | 0             | Initial indentation level                  |
| `onItemClick`    | `(id: string) => void` | undefined     | Callback when item is clicked              |
| `isRootExpanded` | `boolean`              | false         | Whether root folder is expanded by default |

### FileStructure Type

```typescript
type FileStructure = {
  id: string;
  name: string;
  isFolder: boolean | null;
  items: FileStructure[];
  icon?: string;
};
```

### IconOptions Type

```typescript
type IconOptions = {
  size?: number;
  fileIcon?: string;
  folderOpenIcon?: string;
  folderClosedIcon?: string;
  chevronUpIcon?: string;
  chevronDownIcon?: string;
};
```

## 🎨 Customization

### Custom Icons

```tsx
<Explorer
  fileStructure={fileStructure}
  icons={{
    size: 16,
    fileIcon: "/path/to/file-icon.svg",
    folderOpenIcon: "/path/to/folder-open.svg",
    folderClosedIcon: "/path/to/folder-closed.svg",
    chevronUpIcon: "/path/to/chevron-up.svg",
    chevronDownIcon: "/path/to/chevron-down.svg",
  }}
/>
```

### Custom Styling

The component uses Tailwind CSS classes by default but can be customized using your own classes:

```tsx
<div className="custom-wrapper">
  <Explorer fileStructure={fileStructure} />
</div>
```

## 📝 License

MIT © Chamara Senarath

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/chamara-senarath/react-file-xplorer/issues).

## 💖 Show your support

Give a ⭐️ if this project helped you!
