import { useEffect, useRef } from 'react';
import backgroundLineImage from './assets/img_background_line.png'
import $ from './style.module.scss';

const BlackTheme = () => {
  const $canvas = useRef<HTMLCanvasElement>(null);


  const fill = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    

    if(!ctx) {
      return;
    }

    const { width: imageWidth, height: imageHeight, src} = backgroundLineImage;
    const image = new Image(imageWidth, imageHeight);
    image.src = src;

    image.onload = () => {
      const { innerWidth, innerHeight } = window;

      const defaultWidth = innerHeight * (imageWidth / imageHeight);
      const defaultHeight = innerHeight;
      const scale = innerHeight > innerWidth ? 1.3 : 1.1;

      canvas.width = defaultWidth * scale;
      canvas.height = defaultHeight * scale;

      canvas.style.width = `${canvas.width}px`;
      canvas.style.height = `${canvas.height}px`;

      const { width: screenWidth, height: screenHeight } = canvas;
      const drawStartWidth = (screenWidth - defaultWidth) / 2;
      const drawEndWidth = screenWidth - (drawStartWidth * 2);
      const drawStartHeight = screenHeight - defaultHeight;
      const drawEndHeight = defaultHeight;

 
      ctx.drawImage(image, drawStartWidth, drawStartHeight, drawEndWidth, drawEndHeight);



      const can = document.createElement('canvas');
      can.width = defaultWidth * scale;
      can.height = defaultHeight * scale;

      can.style.width = canvas.style.width
      can.style.height = canvas.style.height

      const ctx2 = can.getContext('2d')!
      ctx2.drawImage(image, drawStartWidth + 200, drawStartHeight + 200, drawEndWidth + 200, drawEndHeight + 200);
      ctx2.globalCompositeOperation = "source-in";
      ctx2.fillStyle = "#09f";
      ctx2.fillRect(0, 0, canvas.width, canvas.height);

      ctx.putImageData(ctx2.getImageData(0, 0, can.width, can.height), drawStartWidth, drawStartHeight)

    }
  }

  const startAnimation = () => {
    $canvas.current && fill($canvas.current);
  }

  useEffect(() => {
    startAnimation();
    // 디바운스 걸기
    window.addEventListener('resize', startAnimation);

    return () => {
      window.removeEventListener('resize', startAnimation);
    }
  }, [])

  return (
    <section className={$.wrap}>
      <canvas className={$.screen} ref={$canvas}>
        ss
      </canvas>
    </section>
  );
};

export default BlackTheme;
