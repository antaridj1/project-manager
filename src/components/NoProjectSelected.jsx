import NoProjectImage from '../assets/no-projects.png';
import Button from './Button';
export default function NoProjectSelected({onCreateProject}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img 
                src={NoProjectImage} 
                className='w-16 h-16 object-contain mx-auto'
                alt="No project selected" />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>
                Select a project or get started with a new one
            </p>
            <p>
                <Button onClick={onCreateProject}>Create New Project</Button>
            </p>
        </div>
    )
}