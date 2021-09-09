const audio = new Audio("/notif.mp3");

export async function sleep(seconds) {
  return new Promise((res) => {
    setTimeout(res, seconds * 1000);
  });
}

export function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

export function checkAudio() {
  return audio.muted;
}

export function setAudio(value) {
  audio.muted = value;
}

export function soundNotification() {
  const playPromise = audio.play();

  if (playPromise) {
    playPromise
      .then((_) => {})
      .catch(console.error);
  }
}
