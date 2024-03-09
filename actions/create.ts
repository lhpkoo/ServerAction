"use server";

import { db } from "@/lib/db";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod";

export type State = {
    errors?: {
        title?:string[];
    },
    message?: string | null;
}


const CreateTest = z.object({
    title: z.string().min(1 , {
        message: "Title最少１個字"
    }),
},
)


export async function create(prevState:State  ,formData: FormData){

    const validatedFields = CreateTest.safeParse({
        title: formData.get("title")
    })


    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: `${error}`
        }
    }

    // const title = formData.get("title") as string; 

    const { title } = validatedFields.data;

    try {
       await db.test.create({
        data: {
            title,
        }
    })
    } catch (error) {
       return {
            message: "Database Error"
       } 
    }

  


revalidatePath("/tests")
redirect("/tests")
    
}