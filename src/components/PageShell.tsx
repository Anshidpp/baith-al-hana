import type { ReactNode } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: ReactNode }) {
  return (<><TopBar /><Header /><main>{children}</main><Footer /></>);
}
