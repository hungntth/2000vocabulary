import React, { useState } from "react";
import { Volume2 } from "lucide-react";
import { audioManager } from "../../application/utils/audio";

interface AudioButtonProps {
  audioUrl: string;
  className?: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({
  audioUrl,
  className = "",
}) => {
  return (
    <button
      onClick={() => audioManager.play(audioUrl)}
      className={`p-2 rounded-full transition-colors hover:bg-blue-50 cursor-pointer
      } ${className}`}
      aria-label="Play pronunciation"
    >
      <Volume2 className={`w-5 h-5 text-blue-500`} />
    </button>
  );
};

export default AudioButton;
