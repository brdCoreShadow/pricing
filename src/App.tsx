import * as SC from "./AppStyled"
import Console from "./components/Console/Console"
import PacksList from "./components/PacksList/PacksList"
import Title from "./components/Title/Title"
import SharedLayout from "./layouts/SharedLayout/SharedLayout"

const App:React.FC = () => {

  return (
    <SC.AppCon>
    <SharedLayout>
      <Title/>
      <Console/>
      <PacksList/>
    </SharedLayout>
    </SC.AppCon>
  )
}

export default App
