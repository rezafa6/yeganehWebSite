import './App.css';
import Main from "./pages/main";
import ContextController from "./context/contextManagement";
import Loading from "./components/spiner";

function App() {
    return (
        <ContextController>
            <div className="App">
                <Main/>
            </div>
        </ContextController>
    );
}

export default App;
