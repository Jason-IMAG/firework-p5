使用 p5js 語法:

專案使用react的話需要先 npm install react-p5
然後import Sketch from 'react-p5';
狀態管理建議都使用useRef 否則狀態改變的時候會被重新渲染
在最下面 return 的地方 return 一個 Sketch 標籤
標籤裡面包含 setup(必要), draw(必要), mousePressed(如果有需要的話)
用setup funtion 設定畫布大小、幀數、顏色模式等等
例如 
const setup = ( p5, canvasParentRef ) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0,0,0);
    ......
    參數設定都需要有p5.前綴
}
setup 只會執行一次

draw fuction 預設每秒執行 60 次 想要調整的話可以在 setup 裡面設定

const draw = (p5) => {
    ......
    p5.push();
    ......想要畫的東西
    p5.pop();
    //如果想要畫兩個東西以上的話 要用push跟pop隔離 才不會互相影響
    p5.push();
    ......想要畫的東西
    p5.pop();
}