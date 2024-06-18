import Image from "next/image"
import Points from "./points"
import { DocumentData } from "firebase/firestore"
import ScrollIcon from "../icons/scroll-icon"
import Layers from "./layers"

interface RoomEditorProps {
  initialData: DocumentData[]
}

const RoomEditor: React.FC<RoomEditorProps> = ({ initialData }) => {
  return (
    <div className="relative flex w-full h-screen bg-[#1f1f1f] overflow-x-auto">
      <div className="aspect-[1240/873] h-full relative mx-auto">
        <ScrollIcon className="fixed top-10 left-10 w-14 h-14 xl:hidden" />
        <Image
          className="w-full h-full"
          src="https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554"
          alt="Room Base"
          width={1240}
          height={873}
        />
        <Layers points={initialData} />
        <Points points={initialData} />
      </div>
    </div>
  )
}

export default RoomEditor
