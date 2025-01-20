import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Selector from "./components/Selector";
import Information from "./components/Information";
import Empty from "./components/Empty";
import projects from "./components/data/projects";
import { data, doneProject } from "./components/data/details";

export default function App() {
    const [project, setProject] = useState(doneProject);
    const [Component, setComponent] = useState(null);
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSelector = (e) => {
        const selectedProject = e.currentTarget.value;
        if (!isNaN(selectedProject)) {
            setProject(selectedProject);
        }
    };

    useEffect(() => {
        const loadComponent = async () => {
            setIsLoading(true);
            const projectData = projects.find(
                (x) => x.id === parseInt(project)
            );
            if (!projectData) {
                setComponent(null);
                setIsLoading(false);
                return;
            }
            setTitle(projectData.title);

            try {
                const module = await import(
                    `./components/projects/${projectData.name}.jsx`
                );
                setComponent(() => module.default);
            } catch {
                setComponent(null);
            } finally {
                setIsLoading(false);
            }
        };

        if (project) loadComponent();
    }, [project]);

    return (
        <>
            <Header />
            <main className="container">
                <Selector
                    data={projects}
                    project={project}
                    func={handleSelector}
                />
                {project === "" ? (
                    <Empty msg="Please Select a Project!!" />
                ) : parseInt(project) === 0 ? (
                    <Information data={data} />
                ) : isLoading ? (
                    <Empty msg="Loading . . ." />
                ) : Component ? (
                    <Component title={title} />
                ) : (
                    <Empty msg="Not Started Yet . . ." />
                )}
            </main>
            <Footer />
        </>
    );
}
