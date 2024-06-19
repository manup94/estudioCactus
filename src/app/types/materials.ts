import { type z } from "zod"
import { type materialSchema } from "../schemas/materialSchema"

export type Material = z.infer<typeof materialSchema> & {
  id: string
}
