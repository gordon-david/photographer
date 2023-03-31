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
import { ApiProvider } from "./feature/api"
import { useState } from "react";

const standardTransition = 'transition-all duration-700 ease-in-out '

function App() {
    const [open, setOpen] = useState(false)

    return (
        <ApiProvider>
            <div className="overflow-hidden">
                <BrowserRouter>
                    {/* <Navbar /> */}
                    <div className={`fixed top-0 right-0 bottom-0 overflow-scroll z-10 ${standardTransition} ${!open? 'transform translate-x-60':'' } `}>
                        <ul className="float-right flex flex-col w-60 bg-white pl-3">
                            <button className="text-black float right" onClick={() => setOpen(false)}>close</button>
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

                    <div className={`${open? 'transform -translate-x-60':''}`}>

                        <header>
                            <div className="w-full h-12 bg-amber-50 flex items-center justify-between px-2">
                                <h1 className="text-3xl font-bold italic">NAME</h1>
                                <button onClick={() => { setOpen(!open) }}>Menu</button>
                            </div>

                        </header>
                        <main className={`container mx-auto px-2 mb-20 mt-2 max-w-screen-lg relative`}>
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
