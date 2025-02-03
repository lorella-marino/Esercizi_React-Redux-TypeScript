import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="main-container">
      <ButtonComponent ButtonTitle="Titolo del button" />

      <ImageComponent
        src="https://images.everyeye.it/img-notizie/attack-on-titan-finale-dell-anime-spiegato-bene-v4-681506-1280x720.webp"
        alt="foto"
      />
    </div>
  );
}

export default App;
