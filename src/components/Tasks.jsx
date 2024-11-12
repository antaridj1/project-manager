import NewTask from "./NewTask";

export default function Tasks({onAdd, onDelete, tasks}){
    return (
        <section>
            <h2 className="text-xl font-bold text-stone-700 mb-4">
                Tasks
            </h2>
            <NewTask 
                onAdd={onAdd}
            />
            {tasks.length === 0 && (
                <p className="text-stone-800 my-4">
                    This project doesn't have any project yet
                </p>
            )}

            {tasks.length > 0 && (  
                <ul className="mt-4">
                    {tasks.map(task => 
                        <li key={task.id} className="flex items-center justify-between bg-stone-100 px-4 py-1 mb-2 rounded-md">
                            <p>{task.text}</p>
                            <button 
                                onClick={() => onDelete(task.id)}
                                className="text-sm text-stone-400 hover:text-red-700">
                                    Clear
                            </button>
                        </li>
                    )}
                </ul>
            )}
        </section>
    )
}