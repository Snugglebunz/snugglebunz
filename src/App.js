import Header from "./components/Header";
import heroVideo from "./assets/hero-video.mp4";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <div className="videoSection">

          <div className="videoWrapper">
            <video
              className="centerVideo"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <p className="tagline">
            Organic designer cinnamon rolls. The best bunz in town!
          </p>

          <div className="orderButtons">

            <a
              href="https://www.ubereats.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="orderBtn"
            >
              Order on Uber Eats
            </a>

            <a
              href="https://www.grubhub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="orderBtn"
            >
              Order on Grubhub
            </a>

            <a
              href="https://www.doordash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="orderBtn"
            >
              Order on DoorDash
            </a>

            <a
              href="https://www.seamless.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="orderBtn"
            >
              Order on Seamless
            </a>

          </div>

        </div>
      </main>
    </div>
  );
}

export default App;