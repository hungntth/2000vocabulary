class AudioManager {
  private audio: HTMLAudioElement | null = null;

  play(audioUrl: string) {
    // Dừng audio hiện tại nếu đang phát
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0; // Reset thời gian phát
    }

    // Tạo audio mới
    this.audio = new Audio(audioUrl);

    // Phát audio
    this.audio
      .play()
      .then(() => {
        console.log("Audio is playing");
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
        this.audio = null; // Reset audio instance
      });
  }
}

export const audioManager = new AudioManager();
