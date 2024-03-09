"use client"

import { useFormStatus } from "react-dom";

interface FormInputProps {
    errors?: {
        title?: string[];
    };
}

export const FormInput = ({ errors } : FormInputProps) => {
    const { pending } = useFormStatus();
    return (
        <>
        
        <input type="title" 
        name="title"
        placeholder="Title"
        disabled={pending}
        />

            {errors?.title ? (
            <div>
                {errors.title.map((error: string) => (
                    <p key={error}  >
                        {error}
                    </p>
                ))}
            </div>
        ) : null}
       
        </>
    )
}