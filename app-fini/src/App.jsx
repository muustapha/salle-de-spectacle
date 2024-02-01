
import { useContext, useEffect } from "react";
import Navigation from "./layout/Navigation"
import { UserContext } from "./components/context/UserContext";

function App() {

  const { updateUserContext } = useContext(UserContext);

  const userRole = localStorage.getItem('UserRole');
  const userToken = localStorage.getItem('UserToken');

  useEffect(() => {
    
  if (userRole && userToken) {
    let token = userToken.substr(1)
    token = token.slice(0,-1)
    updateUserContext("token", token);
    updateUserContext("role", userRole);
  }
  }, [])


  return (
    <>   
      <Navigation />
    </>
  )
}

export default App
