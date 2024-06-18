import { DocumentData } from "firebase/firestore"
import Image from "next/image"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { setSelectionSelector, useStore } from "@/app/utils/store"
import clsx from "clsx"

interface MaterialSelectorProps {
  materials: DocumentData[]
  pointId: string
}
const MaterialSelector: React.FC<MaterialSelectorProps> = ({
  pointId,
  materials,
}) => {
  const setSelection = useStore(setSelectionSelector)
  const selection = useStore((state) => state.selection)
  const handleClick = (materialId: string) => {
    setSelection({ [pointId]: materialId })
  }

  return (
    <div className="h-2/3 flex flex-col gap-y-3">
      {materials?.map((material: DocumentData) => (
        <DropdownMenu.Item key={material.id} className="outline-white">
          <button
            onClick={() => handleClick(material.id)}
            className={clsx(
              "w-full p-2 flex gap-2 items-center justify-between rounded-md",
              selection?.[pointId] === material.id
                ? "bg-white/80"
                : "bg-white/20"
            )}
          >
            <p className="text-[#9e9c9b] font-semibold">{material.name}</p>
            <Image
              priority
              src={material.materialPreview}
              alt={material.name}
              width={100}
              height={100}
              className="max-w-[100px] max-h-[100px] rounded-md"
            />
          </button>
        </DropdownMenu.Item>
      ))}
    </div>
  )
}

export default MaterialSelector