import Button from "./Button";

export default function Sidebar({onCreateProject, projects}){
    
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-xl">
            <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">My Projects</h2>
            <div>
               <Button onClick={(onCreateProject)}>+ Add Project</Button>
            </div>
            <ul>
                {projects.map((project) => 
                    <li key={project.id}>
                        <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                            {project.title}
                        </button>
                    </li>
                )}
            </ul>
        </aside>
    )
}