import { useState } from "react"
import ApplyCard from "./components/cards/applycard"
import JobForm from "./components/form/register"
export default function App() {
  const [updatestate,setupdatestate] = useState(false)

  return (
    <div>
      <div>
        <JobForm  statechange={(e)=>setupdatestate(true)}/>
      </div>
      <div>
        <ApplyCard statechange={updatestate} />
      </div>

    </div>
  )
}