import React from 'react'

export default function subjectPrompts({params}:{params:{id:string}}) {
    const {id} = params
  return (
    <div>
      {id}
    </div>
  )
}
