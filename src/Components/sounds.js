import {Howl, Howler} from 'howler';

const soundFiles = [
    "/assets/sounds/twinkle.mp3",
    "/assets/sounds/squeak.mp3",
    "/assets/sounds/splash.mp3",
    "/assets/sounds/jump.mp3",
    "/assets/sounds/bell.mp3",
    "/assets/sounds/snap.mp3",
    "/assets/sounds/pop.mp3",
    "/assets/sounds/failed.mp3",
    "/assets/sounds/tada.mp3",
    "/assets/sounds/startMusic.mp3",
    "/assets/sounds/countdown.wav",
  ];
  
  const sounds = soundFiles.map((src) => new Howl({ src: [src] }));
  Howler.volume(2.0);
  
  export default sounds;