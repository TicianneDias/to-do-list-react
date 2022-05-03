import Header from "./components/Header/Header"
import ToDoList from "./components/ToDoList/ToDoList"
import GlobalStyle from './Style/GlobalStyle'

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <ToDoList/>
    </div>
  )
}

export default App
