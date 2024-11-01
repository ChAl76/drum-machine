import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { togglePower, setVolume } from './store';
import DrumPad from './DrumPad';
import './App.css';

const clips = [
  {
    key: 'Q',
    id: 'Heater 1',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
  },
  {
    key: 'W',
    id: 'Heater 2',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
  },
  {
    key: 'E',
    id: 'Heater 3',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
  },
  {
    key: 'A',
    id: 'Heater 4',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
  },
  {
    key: 'S',
    id: 'Clap',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
  },
  {
    key: 'D',
    id: 'Open HH',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
  },
  {
    key: 'Z',
    id: "Kick n' Hat",
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
  },
  {
    key: 'X',
    id: 'Kick',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
  },
  {
    key: 'C',
    id: 'Closed HH',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
  },
];

function App() {
  const displayText = useSelector((state) => state.display.text);
  const power = useSelector((state) => state.drum.power);
  const volume = useSelector((state) => state.drum.volume);
  const dispatch = useDispatch();

  const handleVolumeChange = (event) => {
    dispatch(setVolume(event.target.value));
  };

  return (
    <div id="drum-machine">
      <h1 className="title">Drum Machine</h1>

      <div className="controls-power">
        <div className="form-check form-switch" style={{ float: 'right' }}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="power-switch"
            checked={power}
            onChange={() => dispatch(togglePower())}
          />
          <label className="form-check-label" htmlFor="power-switch">
            Power
          </label>
        </div>
      </div>

      <div id="display">
        <div className="display-text">
          {displayText || 'Press the key to hear the sound'}
        </div>
      </div>

      <div className="pad-container">
        {clips.map((clip) => (
          <DrumPad
            key={clip.key}
            keyTrigger={clip.key}
            sound={clip.url}
            id={clip.id}
            power={power}
            volume={volume}
          />
        ))}
      </div>
      <div className="controls-volume">
        <label htmlFor="volume-slider">Volume</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          id="volume-slider"
          className="volume-slider"
        />
      </div>
    </div>
  );
}

export default App;
