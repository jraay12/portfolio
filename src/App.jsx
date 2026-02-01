import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import TeachStack from "./components/TechStack";
import RecentLearning from "./components/RecentLearning";
import RecentProject from "./components/RecentProject";
function App() {
  
  return (
    <>
      <Header />
      <div className="container mx-auto h-screen p-4 ">
        <Profile />
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <div className="flex flex-col gap-10">
            <About />
            <TeachStack />
          </div>
          <div className="flex flex-col gap-10 w-full">
            <Experience />
            <RecentLearning />
          </div>
        </div>
        <RecentProject />
        
      </div>
    </>
  );
}

export default App;
