"use client"

import { useEffect } from "react"
import WarningIcon from "./icons/warning-icon"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}): JSX.Element {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="bg-[#1f1f1f] w-screen h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-10 w-2/3 h-2/3 flex flex-col justify-center gap-y-6 items-center text-center">
        <WarningIcon className="w-36 h-36" />
        <h2 className="font-bold text-xl">Something went wrong!</h2>

        <button
          className="bg-green-500 text-white rounded-md px-4 py-2"
          onClick={() => {
            reset()
          }}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
