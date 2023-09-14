

import './App.css'
import ImageBox from './ImageBox'
import User from './User'


function App() {
  

  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Hello world!
      <User firstName={"hadasa"} lastName={"shachor"}/>
      <ImageBox image={'https://picsum.photos/seed/picsum/200/300'}/>
    </h1>
    </>
  )
}

export default App
