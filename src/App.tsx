
import Button from "./Challenges/first/Button"
import ContactForm from "./Challenges/four/ContactForm"
import FocusInput from "./Challenges/four/FocusInput"
import Todo from "./Challenges/three/Todo"
import UserProfile from "./Challenges/three/UserProfile"
import AdminInfo from "./Challenges/two/AdminInfo"
import UserInfo from "./Challenges/two/UserInfo"
import Form from "./components/Form"
import User from "./components/User"

function App() {
  

  return (
    <>
      {/* <User name="Aashish" age={24} happy={true}/>       */}

      {/* <Button label="click" onclick={()=>alert("clicked")} disabled={false}/>
      <Button label="click" onclick={()=>alert("clicked")} disabled={true}/> */}

      {/* <UserInfo name="Aashish" id={1} email="aashish@gmail.com"/>
      <AdminInfo name="Aashish Dubey" id={0} email="Ad@gmail.com" canBan={true} canKick={true} owner={true}/> */}

      {/* <UserProfile />
      <Todo /> */}

      {/* <Form  /> */}
      {/* <FocusInput /> */}
      <ContactForm />
    </>
  )
}

export default App
