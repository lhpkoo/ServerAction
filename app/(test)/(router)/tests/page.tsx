import { create } from "@/actions/create"
import { db } from "@/lib/db";
import TestPage from "./[testId]/page";
import { useFormState } from "react-dom";
import { Form } from "@/components/form";

const TestsPage = async () => {
    const tests = await db.test.findMany();
    // const initState = { message: null, errors: {} };
    // const [ state , dispatch ] = useFormState( create, initState );
    
    return (
        <>
        <div>
        <h1>Test Page (useAction Hook)</h1>
        </div>
        <div>
        {/* <form action={dispatch}>
            <input type="title" 
                name="title"
                placeholder="Title"
                />
            <button type="submit" >Submit</button>
        </form> */}

        <Form />

        {tests.map((test) => (
            // <div key={test.id}>
            //     Name : {test.title} 
            // </div>
            <TestPage title={test.title} key={test.id} id={test.id}/>


        ))}


        </div>
        </>
    )
}

export default TestsPage