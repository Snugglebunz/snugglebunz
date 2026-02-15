import Header from "./components/Header";
import heroVideo from "./assets/hero-video.mp4";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <video
          className="centerVideo"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
      </main>
    </div>
  );
}

export default App;