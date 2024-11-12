import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const handleCreateProject = () => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null}
    });
  }

  const handleAddNewProject = (project) => {
    const newProject = {
      ...project,
      id: Math.random()
    }
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState, 
        selectedProjectId: undefined,
        projects: [...prevProjectsState.projects, newProject]
      }
    })
  }

  console.log(projectsState)

  let content;
  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddNewProject}/>;
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onCreateProject={handleCreateProject}/>;
  }

  return (
    <>
      <main className="h-screen m-2 flex gap-8">
        <Sidebar 
          projects={projectsState.projects}
          onCreateProject={handleCreateProject}/>
       {content}
      </main>
    </>
  );
}

export default App;
