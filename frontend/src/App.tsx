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

function App() {
    return (
        <ApiProvider>
            <div className="">
                <BrowserRouter>
                    <Navbar />
                    <main className="container mx-auto px-8 mb-20 mt-28 max-w-screen-lg">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/gallery" element={<Gallery />} />
                        </Routes>
                    </main>
                </BrowserRouter>
            </div>
        </ApiProvider>
    );
}

export default App;
