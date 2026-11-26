import "./app.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProfileCard from "./components/ProfileCard"
import Tag from "./components/Tag"

function App(){

  const name = "Adeoluwa"
  const job = "Software Engineer"
  return(
    <div>
      <Navbar/>
      <h1 className="welcome">Hello World</h1>
      <p>My name is {name} </p>
      <p>I'm a {job}</p>

      {/* <ProfileCard name="Adeoluwa" role="Software Engineer"/>
      <ProfileCard name="Solaniyun" role="Lawyer"/> */}

      

        <Tag>   <ProfileCard name="Adeoluwa" role="software engineer"/> </Tag>
        <Tag>   <ProfileCard name="Daniel" role= "Lawyer"/> </Tag>
        <Tag>   <ProfileCard name="Bisi" role="Doctor"/> </Tag>

        
      <Footer/>
    </div>
  )
}

export default App