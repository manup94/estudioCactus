import { z } from "zod"

export const materialSchema = z.object({
  materialPreview: z.string(),
  points: z.array(z.string()),
  name: z.string(),
  layers: z.record(z.string()),
})
