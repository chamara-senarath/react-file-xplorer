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
export declare const Explorer: ({ fileStructure, icons, level, onItemClick, isRootExpanded, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
