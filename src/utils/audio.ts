class AudioManager {
  private static instance: AudioManager;
  private currentAudio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;

  private constructor() {}

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  public play(
    audioUrl: string,
    onPlayingChange: (playing: boolean) => void
  ): void {
    if (this.isPlaying) {
      return;
    }

    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }

    this.currentAudio = new Audio(audioUrl);
    this.isPlaying = true;
    onPlayingChange(true);

    this.currentAudio.onended = () => {
      this.isPlaying = false;
      onPlayingChange(false);
      this.currentAudio = null;
    };

    this.currentAudio.play().catch((error) => {
      console.error("Error playing audio:", error);
      this.isPlaying = false;
      onPlayingChange(false);
      this.currentAudio = null;
    });
  }
}

export const audioManager = AudioManager.getInstance();
