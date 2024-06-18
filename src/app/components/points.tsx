import { DocumentData } from "firebase/firestore"

interface PointsProps {
  points: DocumentData[]
  onPointClick: (pointId: string) => void
}

const Points: React.FC<PointsProps> = ({ points, onPointClick }) => {
  return points.map((point, i) => {
    return (
      <button
        id={point?.id}
        key={point?.id}
        className="absolute w-6 h-6 border border-white rounded-full p-6"
        style={{ top: `${point.coordY}%`, left: `${point.coordX}%` }}
        onClick={() => onPointClick(point.id)}
      />
    )
  })
}

export default Points
