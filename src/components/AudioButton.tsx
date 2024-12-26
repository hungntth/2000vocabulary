import React from 'react';
import { Volume2 } from 'lucide-react';

interface AudioButtonProps {
  audioUrl: string;
  className?: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ audioUrl, className = '' }) => {
  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = new Audio(audioUrl);
    audio.play().catch(error => console.error('Error playing audio:', error));
  };

  return (
    <button
      onClick={playAudio}
      className={`p-2 hover:bg-blue-50 rounded-full transition-colors ${className}`}
      aria-label="Play pronunciation"
    >
      <Volume2 className="w-5 h-5 text-blue-500" />
    </button>
  );
}

export default AudioButton;