import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}){
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        let modalContent;
        if( enteredTitle.trim() === '' || 
            enteredDescription.trim() === '' || 
            enteredDueDate.trim() === ''){
            
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    return (
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
            <p className='text-stone-400 mb-4'>Please make sure you have entered valid inputs</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button 
                        onClick={handleSave}
                        className="py-2 px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                            Save
                    </button>
                </li>
            </menu>
            <div>
                <Input 
                    type="text"
                    label="Title"
                    ref={title}/>
                <Input 
                    type="text"
                    label="Description"
                    isTextarea="true"
                    ref={description}>
                </Input>
                
                <Input 
                    type="date"
                    label="Due Date"
                    ref={dueDate}/>
            </div>
        </div> 
        </>
    )
}