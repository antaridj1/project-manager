import { forwardRef } from "react";

const Input = forwardRef(function Input({children, label, isTextarea = false, ...props}, ref){
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return (
        <div className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {isTextarea ? 
                <textarea ref={ref} className={classes} {...props}>{children}</textarea> : 
                <input ref={ref} className={classes} {...props} />
                }
        </div>
    )
});

export default Input;