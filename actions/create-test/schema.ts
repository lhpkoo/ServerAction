import { z } from "zod";

export const CreateTest = z.object({
    title:z.string({
        required_error: " 標題為必填項 ",
        invalid_type_error: " 標題為必填項 ",
    }).min(3, {
        message: " 標題太短 "
    }),

})