import { Del } from "@/actions/delete";
import { FormDelete } from "@/components/form-delete";

interface TestProps {
    title: string;
    id: string;
}


const TestPage = ({title , id} : TestProps) => {
    const  deleteTestWithId = Del.bind(null, id)
    return (
        <div>
            <form action={deleteTestWithId}>

            Testid: { id }
            title: { title }

            <FormDelete />
            </form>
        </div>
    )
}

export default TestPage