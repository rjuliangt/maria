import {StickyNavbar} from "./StickyNavbar";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-full w-full">
      <StickyNavbar/>
      <div
        id="outlet"
        className="lg:w-[calc(100%-21rem)] lg:ml-[19rem] lg:mb-0 max-h-[calc(100vh-3rem)] pt-[5rem] md:pt-5 lg:pt-5 xl:pt-5 mx-5 lg:mx-0 md:mx-0">
        <div
          className="">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}