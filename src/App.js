import Header from "./components/Header";
import heroVideo from "./assets/hero-video.mp4";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <div className="videoSection">
          <video
            className="centerVideo"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />

          <p className="tagline">
            Organic designer cinnamon rolls. The best bunz in town!
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;