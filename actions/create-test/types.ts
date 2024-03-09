import { z } from "zod"; 
import { Test } from "@prisma/client"; 

import { ActionState } from "@/lib/create-safe-action"; 
import { CreateTest } from "./schema";

export type InputType = z.infer<typeof CreateTest>;
export type ReturnType = ActionState<InputType, Test>;