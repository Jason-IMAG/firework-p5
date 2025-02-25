import Sketch from "react-p5";
import {  useRef } from 'react';

function Music(){
  const songRef = useRef(null);
  const fftRef = useRef(null);
  const amplitudeRef = useRef(null);
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0,0,0);
    // 創建音頻分析器
    fftRef.current = new p5.FFT();
    amplitudeRef.current = new p5.Amplitude();

    // 載入音樂
    songRef.current = p5.loadSound('/audio/music.mp3', () => {
      console.log('音樂載入完成');
    });
  }
  const draw = (p5) => {
    p5.background(0);

    // 獲取頻譜數據
    let spectrum = fftRef.current.analyze();
    
    // 繪製頻譜
    p5.noStroke();
    p5.fill(255);
    for (let i = 0; i < spectrum.length; i++) {
      let x = p5.map(i, 0, spectrum.length, 0, p5.width);
      let h = p5.map(spectrum[i], 0, 255, 0, p5.height);
      p5.rect(x, p5.height - h, p5.width / spectrum.length, h);
    }

    // 獲取音量
    let level = amplitudeRef.current.getLevel();
    let diameter = p5.map(level, 0, 1, 10, 200);
    p5.ellipse(p5.width/2, p5.height/2, diameter, diameter);
  }

  // 播放/暫停按鈕
  const handlePlayPause = () => {
    if (songRef.current.isPlaying()) {
      songRef.current.pause();
    } else {
      songRef.current.play();
    }
  }


    return(
        <div>
            <Sketch setup={setup} draw={draw}/>
            <button onClick={handlePlayPause}>播放/暫停</button>
        </div>
    )
}

export default Music;