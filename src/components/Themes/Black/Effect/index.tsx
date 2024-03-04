import { useEffect, useRef } from 'react';
import $ from './style.module.scss';


interface EffectOptions {
  viewWidth: number;
  viewHeight: number;
  ctx: CanvasRenderingContext2D | null,
  patternSize: number;
  patternScaleX: number;
  patternScaleY: number;
  patternRefreshInterval:  number;
  patternAlpha: number;
  patternPixelDataLength: number;
  patternCanvas: HTMLCanvasElement | null;
  patternCtx: CanvasRenderingContext2D | null;
  patternData: ImageData | null;
  frame: number;
}

const Effect = () => {
  const $canvas = useRef<HTMLCanvasElement>(null);
  const $options = useRef<EffectOptions>({
    viewWidth: 0,
    viewHeight: 0,
    ctx: null,
    patternSize: 2,
    patternScaleX: 2,
    patternScaleY: 1,
    patternRefreshInterval: 3,
    patternAlpha: 25,
    patternPixelDataLength: 2 * 2 * 4,
    patternCanvas: null,
    patternCtx: null,
    patternData:  null,
    frame: 0
  })

  const initCanvas = () => {
    const { ctx, patternScaleX, patternScaleY } = $options.current;
    ctx && ctx.scale(patternScaleX, patternScaleY);
  }

  const initGrain = () => {
    const patternCanvas = document.createElement('canvas');
    const patternCtx = patternCanvas.getContext('2d');
    const { patternSize } = $options.current;

    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;

    $options.current.patternCanvas = patternCanvas;
    $options.current.patternCtx = patternCtx;
    patternCtx && ($options.current.patternData = patternCtx.createImageData(patternSize, patternSize))
  }

  const update = () => {
    const { patternPixelDataLength, patternData, patternAlpha, patternCtx } = $options.current;
    if(!(patternData && patternCtx)) {
      return;
    }

    let value = 0;;
    for (let i = 0; i < patternPixelDataLength; i += 4) {
        value = (Math.random() * 255) | 0;
        patternData.data[i    ] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
    }

    patternCtx.putImageData(patternData, 0, 0);
  }

  const draw = () => {
    const { ctx, viewWidth, viewHeight, patternCanvas } = $options.current;
    if(!(ctx && patternCanvas)) {
      return;
    }

    ctx.clearRect(0, 0, viewWidth, viewHeight);
    const pattern = ctx.createPattern(patternCanvas, 'repeat');
    pattern && (ctx.fillStyle = pattern);
    ctx.fillRect(0, 0, viewWidth, viewHeight);
  }

  const loop = () => {
    const { frame, patternRefreshInterval } = $options.current;

    if (frame % patternRefreshInterval === 0) {
        update();
        draw();
    }
    requestAnimationFrame(loop);
  }

  useEffect(() => {
    $options.current.ctx = $canvas.current?.getContext('2d') || null;
    $options.current.viewWidth = $canvas.current?.clientWidth || 0;
    $options.current.viewHeight = $canvas.current?.clientHeight || 0;
    initCanvas();
    initGrain();
    requestAnimationFrame(loop);
  }, [])

  return (
    <canvas className={$.effect} ref={$canvas} />
  );
};

export default Effect;
