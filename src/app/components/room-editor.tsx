"use client"

import Image from "next/image"
import Points from "./points"
import { useState } from "react"
import { DocumentData } from "firebase/firestore"
import MaterialSelector from "./material/material-selector"

interface RoomEditorProps {
  initialData: DocumentData[]
}

const RoomEditor: React.FC<RoomEditorProps> = ({ initialData }) => {
  const [points, setPoints] = useState<DocumentData[]>(initialData)
  const [selectedPoint, setSelectedPoint] = useState<DocumentData | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handlePointClick = (pointId: string) => {
    const point = points.find((p) => p.id === pointId)
    setSelectedPoint(point || null)
  }
  console.log(selectedPoint)
  return (
    <div className="flex gap-4 w-full h-full">
      <div
        className="relative w-2/3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className="w-full h-full"
          src="https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554"
          alt="Room Base"
          width={1000}
          height={1000}
        />
        {isHovered && (
          <Points points={points} onPointClick={handlePointClick} />
        )}
      </div>
      <MaterialSelector selectedPointData={selectedPoint?.materials} />
    </div>
  )
}

export default RoomEditor
