import { useFormStatus } from "react-dom"

export const FormButton = () => {
    const { pending } = useFormStatus();

    return (

        <button 
        type="submit" 
        disabled={pending}
        >Submit</button>
    )


}