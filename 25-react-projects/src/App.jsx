import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Selector from "./components/Selector.jsx";
import { useState } from "react";
import Information from "./components/Information.jsx";
import Accordion from "./components/Accordion.jsx";
import Empty from "./components/Empty.jsx";

export default function App() {
    const [project, setProject] = useState("0");
    const handleSelector = (e) => {
        setProject(e.currentTarget.value);
    };

    return (
        <>
            <Header />
            <main className="container">
                <Selector project={project} func={handleSelector} />
                {project === "" ? (
                    <Empty msg="Please Select a Project from the Selector!!" />
                ) : project === "0" ? (
                    <Information />
                ) : project === "1" ? (
                    <Accordion />
                ) : (
                    <Empty msg="Not Started Yet . . ." />
                )}
            </main>
            <Footer />
        </>
    );
}
