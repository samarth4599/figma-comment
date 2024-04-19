export const createAudio = (_audioChunks: Blob[]) => {
  if (_audioChunks.length > 0) {
    const audioBlob = new Blob(_audioChunks, { type: "audio/wav" });
    const url = URL.createObjectURL(audioBlob);
    const audio = new Audio(url);
    return audio;
  }
};

export const playRecording = (audio: HTMLAudioElement) => {
  audio.play().catch((error) => console.error("Error playing audio:", error));
  return audio;
};

export const pauseRecording = (audio: HTMLAudioElement) => {
  audio.pause();
  return audio;
};
