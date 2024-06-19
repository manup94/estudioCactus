"use client"
import { useStore } from "../utils/store"
import Image from "next/image"
import { type Material } from "../types/materials"
import { type PointWithMaterials } from "../types/points"

interface LayersProps {
  points: PointWithMaterials[]
}

const Layers: React.FC<LayersProps> = ({ points }) => {
  const selection = useStore((state) => state.selection)
  return points.map((point) => {
    if (selection?.[point.id] === null) return false
    const material = point.materials.find(
      (material: Material) => material.id === selection?.[point.id]
    )

    if (material === null) return false

    return (
      material !== undefined && (
        <Image
          priority
          className="absolute inset-0 w-full h-full"
          key={material.id}
          src={material.layers[point.id]}
          width={1240}
          height={873}
          alt="material-layer"
        />
      )
    )
  })
}

export default Layers
