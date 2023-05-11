import { ReactNode } from "react";
import { Home } from "./home";
import { Pricing } from "./pricing";
import { Contact } from "./contact";

export enum Pages{
  home = "Home",
  pricing = "Pricing",
  contact = "Contact",
}

export const PagesElements : {[k in Pages] : ReactNode} = {
  [Pages.home]: <Home/>,
  [Pages.pricing]: <Pricing/>,
  [Pages.contact]: <Contact/>
}