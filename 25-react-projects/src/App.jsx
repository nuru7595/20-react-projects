import Header from "./components/Header";
import Footer from "./components/Footer";
import Selector from "./components/Selector";
import { useState } from "react";
import Information from "./components/Information";
import Accordion from "./components/pro1/Accordion";
import Empty from "./components/Empty";
import RandomColor from "./components/pro2/RandomColor";
import StarRating from "./components/pro3/StarRating";

export default function App() {
    const [project, setProject] = useState("3");
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
                ) : project === "2" ? (
                    <RandomColor />
                ) : project === "3" ? (
                    <StarRating number={10} />
                ) : (
                    <Empty msg="Not Started Yet . . ." />
                )}
            </main>
            <Footer />
        </>
    );
}
