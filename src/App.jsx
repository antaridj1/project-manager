import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

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

  const handleCancel = () => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined
      }
    })
  }

  const handleSelectProject = (projectId) => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: projectId
      }
    })
  }

  const handleDeleteProject = (projectId) => {
    setProjectsState((prevProjectsState) => {
      const updatedProjects = prevProjectsState.projects.filter(project => project.id !== projectId)
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: updatedProjects
      }
    })
  }


  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId) ?? [];

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddNewProject} onCancel={handleCancel}/>;
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onCreateProject={handleCreateProject}/>;
  }

  return (
    <>
      <main className="h-screen m-2 flex gap-8">
        <Sidebar 
          projects={projectsState.projects}
          onCreateProject={handleCreateProject}
          onSelectProject={handleSelectProject}
          selectedProjectId={selectedProject.id}
        />
       {content}
      </main>
    </>
  );
}

export default App;
