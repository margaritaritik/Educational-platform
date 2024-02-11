import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";
import AccountView from "./Views/AccountView";
import LoginView from "./Views/LoginView";
import MainView from "./Views/MainView";

function App() {

    const Test = () => {
        const routes = useRoutes([
            { path: "/", element: <MainView /> },
            { path: "/account", element: <AccountView /> },
            { path: "/login", element: <LoginView /> },

        ]);
        return routes;
    };

  return (
    <>
        <Router>
            <Test/>
        </Router>
    </>
  );
}

export default App;
