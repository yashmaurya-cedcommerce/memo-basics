import React from 'react'

export default function Task2Child() {
  return (
    <div>

        {/* console 'child component' */}

        {console.log("child component")}

    </div>
  )
}

export const MemoizedChild =  React.memo(Task2Child)