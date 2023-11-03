/// <reference types="react" />
interface MainLayoutInput {
    sideBarWidth?: string;
    LeftMenu: React.FC;
    appTitle: string;
}
declare const LeftMenuLayout: (props: MainLayoutInput) => import("react/jsx-runtime").JSX.Element;
export type { MainLayoutInput };
export { LeftMenuLayout };
