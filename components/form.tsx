"use client"

import { createTest } from "@/actions/create-test";
import { useAction } from "@/hooks/use-action"; 
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";


export const Form = () => {
    // const initState = { message: null, errors: {} };
    // const [ state , dispatch ] = useFormState( create, initState );

    const { execute, fieldErrors } = useAction(createTest, {
        onSuccess: (data) => {
            console.log(data,"SUCCESS")
        },
        onError: (error) => {
            console.error(error)
        }
    });


    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;

        execute({ title })
    }

    return (
    <form action={onSubmit}>
        <FormInput errors={fieldErrors} />

        <FormButton />
    
    </form>


    )


}
