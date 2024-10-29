import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContent from "./Components/MainContent/MainContent";
import TableOfContents from "./Components/TableOfContents/TableOfContents";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        {/* Left Sidebar */}
        <div className="side">
          {" "}
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-grow p-8">
          <MainContent />
        </div>

        {/* Right Sidebar (Table of Content) */}
        <TableOfContents />
      </div>
    </div>
  );
}

export default App;
