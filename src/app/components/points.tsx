"use client"
import { DocumentData } from "firebase/firestore"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import MaterialSelector from "./material-selector"

interface PointsProps {
  points: DocumentData[]
}

const Points: React.FC<PointsProps> = ({ points }) => {
  return points.map((point, i) => {
    return (
      <DropdownMenu.Root key={point.id}>
        <DropdownMenu.Trigger
          id={point?.id}
          key={point?.id}
          style={{ top: `${point.coordY}%`, left: `${point.coordX}%` }}
          className="outline-none after:absolute after:content-[''] after:border-white after:inset-0 after:animate-ping after:border after:rounded-full after:duration-[2s] absolute w-6 h-6 border border-white rounded-full p-6"
        ></DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] bg-white/70 backdrop-blur-md rounded-lg p-2.5 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <MaterialSelector pointId={point.id} materials={point.materials} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    )
  })
}

export default Points
