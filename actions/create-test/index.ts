"use server";

import { db } from "@/lib/db";
import { InputType, ReturnType } from "./types";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateTest } from "./schema";


const handler = async (data: InputType) : Promise<ReturnType> => {
    const { title } = data;

    let test;

    try {
        test = await db.test.create({
            data: {
                title
            }
        })
    } catch (error) {
        return {
            error: " Failed to create "
        }
    }

    revalidatePath(`/test/${test.id}`);
    return {data: test}

}

export const createTest = createSafeAction(CreateTest , handler)