import React from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceCommands = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleSpeechStart = () => {
    SpeechRecognition.startListening();
  };

  const handleSpeechStop = () => {
    SpeechRecognition.stopListening();
  };

  const handleResetTranscript = () => {
    resetTranscript();
  };

  return (
    <div>
      <h2>Voice Commands</h2>
      <button onClick={handleSpeechStart}><FaPlay /> Start</button>
      <button onClick={handleSpeechStop}><FaPause /> Stop</button>
      <button onClick={handleResetTranscript}><FaRedo /> Reset</button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default VoiceCommands;
