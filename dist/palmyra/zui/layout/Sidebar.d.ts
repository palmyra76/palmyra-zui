/// <reference types="react" />
interface SidebarInput {
    LeftMenu: React.FC;
    appTitle: string;
    width: string;
}
declare const Sidebar: (props: SidebarInput) => import("react/jsx-runtime").JSX.Element;
export { Sidebar };
export type { SidebarInput };
