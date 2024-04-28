'use client'

import { usePathname } from "next/navigation";
import Home from "../page";
import About from "../about/page";
import Services from "../services/page";
import Team from "../team/page";
import Products from "../products/page";
import Contact from "../contact/page";

export const Render = () => {
    const pathname = usePathname();

  let componentToRender;

  switch (pathname) {
    case '/':
      componentToRender = <Home />;
      break;
    case '/about':
      componentToRender = <About />;
      break;
    case '/services':
        componentToRender = <Services />;
        break;
    case '/team':
        componentToRender = <Team />;
        break;
    case '/products':
        componentToRender = <Products />;
        break;
    case '/contact':
        componentToRender = <Contact />;
        break;
    default:
      componentToRender = <div>Invalid route</div>;
      break;
  }
  return (
    <div>
        {componentToRender}
    </div>
  );
}