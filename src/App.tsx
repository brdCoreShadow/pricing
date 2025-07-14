import * as SC from "./AppStyled"
import Title from "./components/Title/Title"
import SharedLayout from "./layouts/SharedLayout/SharedLayout"

const App:React.FC = () => {

  return (
    <SC.AppCon>
    <SharedLayout>
      <Title/>
    </SharedLayout>
    </SC.AppCon>
  )
}

export default App
