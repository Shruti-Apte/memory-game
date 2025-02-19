import { Howl, Howler } from 'howler';

const soundFiles = [
    process.env.PUBLIC_URL + "/sounds/twinkle.mp3",
    process.env.PUBLIC_URL + "/sounds/squeak.mp3",
    process.env.PUBLIC_URL + "/sounds/splash.mp3",
    process.env.PUBLIC_URL + "/sounds/jump.mp3",
    process.env.PUBLIC_URL + "/sounds/bell.mp3",
    process.env.PUBLIC_URL + "/sounds/snap.mp3",
    process.env.PUBLIC_URL + "/sounds/pop.mp3",
    process.env.PUBLIC_URL + "/sounds/failed.mp3",
    process.env.PUBLIC_URL + "/sounds/tada.mp3",
    process.env.PUBLIC_URL + "/sounds/startMusic.mp3",
    process.env.PUBLIC_URL + "/sounds/countdown.wav",
  ];
  
  const sounds = soundFiles.map((src) => new Howl({ src: [src] }));
  Howler.volume(1.0);
  
  export default sounds;