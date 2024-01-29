
import Navigation from "./layout/Navigation"
import { UserContext } from "./components/context/UserContext";
import { useContext, useEffect } from "react";

function App() {

  const { updateUserContext } = useContext(UserContext);

  useEffect(() => {
      const userRole = localStorage.getItem('UserRole');
      const userToken = localStorage.getItem('UserToken');

      if (userRole && userToken) {
        let token = userToken.substr(1)
        token = token.slice(0,-1)
        updateUserContext("token", token);
        updateUserContext("role", userRole);
      }
  }, []);

  return (
    <>   
      <Navigation />
    </>
  )
}

export default App
