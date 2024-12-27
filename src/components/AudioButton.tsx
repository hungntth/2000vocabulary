import React, { useState } from "react";
import { Volume2 } from "lucide-react";
import { audioManager } from "../utils/audio";

interface AudioButtonProps {
  audioUrl: string;
  className?: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({
  audioUrl,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    audioManager.play(audioUrl, setIsPlaying);
  };

  return (
    <button
      onClick={handlePlayAudio}
      disabled={isPlaying}
      className={`p-2 rounded-full transition-colors ${
        isPlaying
          ? "bg-blue-50 cursor-not-allowed"
          : "hover:bg-blue-50 cursor-pointer"
      } ${className}`}
      aria-label="Play pronunciation"
    >
      <Volume2
        className={`w-5 h-5 ${isPlaying ? "text-blue-300" : "text-blue-500"}`}
      />
    </button>
  );
};

export default AudioButton;
