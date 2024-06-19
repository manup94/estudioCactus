import { db } from "@/../firebase/init"
import { collection, getDocs } from "firebase/firestore"
import RoomEditor from "./components/room-editor"
import { materialSchema } from "./schemas/materialSchema"
import { pointsSchema } from "./schemas/pointSchema"
import type { PointWithMaterials } from "./types/points"

const RoomConfigurator: React.FC = async (): Promise<JSX.Element> => {
  const initalData = await fetchData()

  return (
    <div className="w-screen h-screen bg-[#1f1f1f]">
      <RoomEditor initialData={initalData} />
    </div>
  )
}

async function fetchData(): Promise<PointWithMaterials[]> {
  const pointsCollection = collection(db, "points")
  const materialsCollection = collection(db, "materials")

  const pointsSnapshot = await getDocs(pointsCollection)
  const materialsSnapshot = await getDocs(materialsCollection)

  const pointsList = pointsSnapshot.docs.map((doc) => ({
    ...pointsSchema.parse(doc.data()),
    id: doc.id,
  }))
  const materialsList = materialsSnapshot.docs.map((doc) => ({
    ...materialSchema.parse(doc.data()),
    id: doc.id,
  }))

  const pointsWithMaterials = pointsList.map((point) => {
    const pointMaterials = materialsList.filter(
      (material) => material.points[0] === point.id
    )
    return { ...point, materials: pointMaterials }
  })
  return pointsWithMaterials
}

export default RoomConfigurator
