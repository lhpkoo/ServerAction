"use client"

import { useFormStatus } from "react-dom"

export const FormDelete = () => {
    const { pending } = useFormStatus();
    return (
        <button 
        type="submit"
        disabled={pending}
        >DELETE</button>
    )
}