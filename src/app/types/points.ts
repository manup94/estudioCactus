import { type z } from "zod"
import { type Material } from "./materials"
import { type pointsSchema } from "../schemas/pointSchema"

export type Point = z.infer<typeof pointsSchema>

export type PointWithMaterials = z.infer<typeof pointsSchema> & {
  materials: Material[]
} & { id: string }
