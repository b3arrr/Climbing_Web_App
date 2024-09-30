import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import GradePage from "./pages/GradePage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/profile" element={<ProfilePage/>} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/grade" element={<GradePage />} />
                </Routes>
            </Router>
        </>

        /*    <div id="grades">
                <Circles color="White" />
                <Circles color="Blue" />
                <Circles color="Yellow" />
                <Circles color="Red" />
                <Circles color="Black" />
                <Circles color="Grey" />
            </div>
            */
    );
}

export default App;
