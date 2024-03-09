"use server"

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function Del(id : string) {
    await db.test.delete({
        where: {
            id
        }
    })

    revalidatePath("/tests")


}