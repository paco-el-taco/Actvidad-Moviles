import GameFeed from "./components/GameFeed";
import Header from "./components/header"
import { AuthProvider } from "./components/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Header className="app__header-placeholder" />

        <div className="app__body">
          <main className="app__main">
            <GameFeed />
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
