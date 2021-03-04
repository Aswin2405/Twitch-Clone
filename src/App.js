import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}
