import {
  Routes,
  Route,
  BrowserRouter,
  createBrowserRouter,
  Router,
  Outlet,
  RouterProvider,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import { ApiProvider } from "./feature/api";
import { useState } from "react";

const standardTransition = "transition-all duration-700 ease-in-out ";

const MobileNav = (props: { handleClose: () => void; open: boolean }) => (
  <div
    className={`sm:hidden fixed w-60 h-screen p-4 top-0 right-0 bg-white bottom-0 overflow-scroll z-10 ${standardTransition} ${
      !props.open ? "transform translate-x-60" : ""
    } `}
  >
    <button
      className="text-black float-right"
      onClick={() => props.handleClose()}
    >
      close
    </button>
    <ul className="flex flex-col w-full">
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
    </ul>
  </div>
);

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ApiProvider>
      <div className="">
        <BrowserRouter>
          <Navbar />
          <MobileNav open={open} handleClose={() => setOpen(false)} />

          <div
            className={`${standardTransition} ${
              open ? "transform -translate-x-60" : ""
            }`}
          >
            <header>
              <div className="w-full sm:hidden h-12 flex items-center justify-between px-2">
                <h1 className="text-3xl font-bold italic">NAME</h1>
                <button
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  Menu
                </button>
              </div>
            </header>
            <main
              className={`container mx-auto px-2 mb-20 mt-2 max-w-screen-lg relative`}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </div>
    </ApiProvider>
  );
}

export default App;
