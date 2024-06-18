import { db } from "@/../firebase/init"
import { collection, getDocs } from "firebase/firestore"
import RoomEditor from "./components/room-editor"

const RoomConfigurator: React.FC = async () => {
  const initalData = await fetchData()

  return (
    <div className="flex justify-center bg-[#1f1f1f] ">
      <RoomEditor initialData={initalData} />
    </div>
  )
}

export async function fetchData() {
  const pointsCollection = collection(db, "points")
  const materialsCollection = collection(db, "materials")

  const pointsSnapshot = await getDocs(pointsCollection)
  const materialsSnapshot = await getDocs(materialsCollection)

  const pointsList = pointsSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  const materialsList = materialsSnapshot.docs.map((doc) => ({
    ...(doc.data() as {
      points: string[]
    }),
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
