import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";


function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="grid-container">
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
        </div>
  );
}

export default App;


//Contacts has imported ContactUserCard component is a functional component. It accepts props as a parameter which are used to pass data to the component. Inside the component, the contact user card structure is rendered, including the user's name, title, description
//Props - the users' info is accessed `props` (props.name, props.title, props.description)
//Same goes for Post -which is functional component
//import React from "react"; - needed in App.jsx to import the whole react library to files. to make use of these functions and objects, allowing us to build our components