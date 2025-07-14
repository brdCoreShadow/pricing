import * as SC from "./AppStyled"
import Console from "./components/Console/Console"
import PacksList from "./components/PacksList/PacksList"
import Title from "./components/Title/Title"
import { useToggle } from "./hooks/useToggle"
import SharedLayout from "./layouts/SharedLayout/SharedLayout"

const App:React.FC = () => {

const {isYear, toggleYear} = useToggle()

  return (
    <SC.AppCon>
    <SharedLayout>
      <Title/>
      <Console isYear={isYear} toggleYear={toggleYear}/>
      <PacksList isYear={isYear}/>
    </SharedLayout>
    </SC.AppCon>
  )
}

export default App
