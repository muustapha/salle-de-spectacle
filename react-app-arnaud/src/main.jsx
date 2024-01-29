import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/mainStyle.css"
import UserProvider from './components/context/UserContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
        <App />
    </UserProvider>
)
