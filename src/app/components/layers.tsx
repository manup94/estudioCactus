"use client"
import { DocumentData } from "firebase/firestore"
import { useStore } from "../utils/store"
import Image from "next/image"

interface LayersProps {
  points: DocumentData[]
}

const Layers: React.FC<LayersProps> = ({ points }) => {
  const selection = useStore((state) => state.selection)
  return points.map((point) => {
    if (!selection?.[point.id]) return null
    const material = point.materials.find(
      (material: DocumentData) => material.id === selection?.[point.id]
    )
    if (!material) return null

    return (
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
  })
}

export default Layers
