import './App.css';
import Main from "./pages/main_page";
import AboutMe from "./pages/components/about_me";
import Skills from "./pages/components/skills";

function App() {
  return (
    <div className="App">
        <section>
            <Main/>
            <div className={"components"}>
                <AboutMe/>
            </div>
            <div className={"components"}>
                <Skills/>
            </div>
        </section>
    </div>
  );
}

export default App;
