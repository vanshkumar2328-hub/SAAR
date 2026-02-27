import { useEffect, useRef, useState } from "react";

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // live mobile detection
  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");

    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  // cursor logic (runs only on desktop)
  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    const points = [];
    let ripples = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    window.addEventListener("resize", resize);

    const handleMove = (e) => {
      points.push({ x: e.clientX, y: e.clientY });
      if (points.length > 10) points.shift();
    };

    const handleClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 1,
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);

    let raf;

    function draw() {
      ctx.clearRect(0, 0, w, h);

      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }

        const last = points[points.length - 1];
        const grad = ctx.createLinearGradient(
          points[0].x,
          points[0].y,
          last.x,
          last.y,
        );

        grad.addColorStop(0, "black");
        grad.addColorStop(1, "white");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      ripples.forEach((r) => {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        r.radius += 1;
        r.alpha -= 0.02;
      });

      ripples = ripples.filter((r) => r.alpha > 0);

      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      id="trail"
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
