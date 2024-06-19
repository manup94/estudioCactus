import { z } from "zod"

export const pointsSchema = z.object({
  coordX: z.number(),
  coordY: z.number(),
  name: z.string(),
})
