import React, { useEffect, useRef } from 'react';

const CHARS    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|;:';
const FONT_SZ  = 13;

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let drops    = [];

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols    = Math.floor(canvas.width / FONT_SZ);
      drops         = Array.from({ length: cols }, () =>
        Math.random() * (canvas.height / FONT_SZ)
      );
    }

    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00FF41';
      ctx.font      = FONT_SZ + 'px Share Tech Mono';

      drops.forEach((y, i) => {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(ch, i * FONT_SZ, y * FONT_SZ);
        if (y * FONT_SZ > canvas.height && Math.random() > 0.975) drops[i] = 0;
        else drops[i]++;
      });
    }

    resize();
    window.addEventListener('resize', resize);
    const id = setInterval(draw, 45);
    return () => { clearInterval(id); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, opacity: 0.07, pointerEvents: 'none',
      }}
    />
  );
}

export default MatrixRain;
