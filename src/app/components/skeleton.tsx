const Skeleton = (): JSX.Element => {
  return (
    <div className="flex items-center w-full space-x-4 p-4">
      <div className="w-24 h-24 bg-gray-300 rounded-md animate-pulse"></div>
    </div>
  )
}

export default Skeleton
