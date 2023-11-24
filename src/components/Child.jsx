import { memo } from "react"

const Child = ({ counterTwo, func }) => {
    console.log("Child compnent render")
    return (
        <div className="flex items-center justify-center text-3xl font-semibold">
            Child Component
        </div>
    )
}

export default memo(Child);
