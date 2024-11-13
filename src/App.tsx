// import './App.css'

import { Stack } from "@fluentui/react"
import { CommandBarButtonAsExample } from "./Components/NavbarCommandBar"
import { NavWrappedExample } from "./Components/Navbarlist"

function App() {

  return (
    <Stack className="mainLayout">
<NavWrappedExample />
<CommandBarButtonAsExample />
    </Stack>
  )
}

export default App
