import { DocumentData } from "firebase/firestore"
import Image from "next/image"

interface MaterialSelectorProps {
  selectedPointData: {}
}
const MaterialSelector: React.FC<MaterialSelectorProps> = ({
  selectedPointData,
}) => {
  return (
    <div>
      <h2>Selected Point:</h2>
    </div>
  )
}

export default MaterialSelector
