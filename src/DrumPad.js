import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDisplayText } from './store';

const DrumPad = ({ keyTrigger, sound, id, power, volume }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const audioElement = document.getElementById(keyTrigger);
    dispatch(setDisplayText(id));

    if (power) {
      audioElement.volume = volume;
      try {
        await audioElement.play();
      } catch (error) {
        console.log('Audio playback interrupted:', error);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === keyTrigger) {
      handleClick();
    }
  };

  useEffect(() => {
    // Attach the keydown event listener when the component mounts
    document.addEventListener('keydown', handleKeyPress);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="drum-pad" id={id} onClick={handleClick}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={sound}></audio>
    </div>
  );
};

export default DrumPad;
