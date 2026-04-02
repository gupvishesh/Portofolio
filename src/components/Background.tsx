import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    let nodes: { x: number; y: number; val: string }[] = [];
    
    const gridSize = 40;
    const pulseRadius = 250;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Generate random data nodes
      nodes = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          val: Math.random().toString(16).substring(2, 6).toUpperCase()
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Base Grid (Very subtle)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(20, 20, 20, 0.03)';
      ctx.lineWidth = 1;

      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // 2. Draw Radar Pulse Glow
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, pulseRadius
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 3. Highlight Grid near Mouse
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.lineWidth = 1.5;

      const startX = Math.floor((mouse.x - pulseRadius) / gridSize) * gridSize;
      const endX = Math.ceil((mouse.x + pulseRadius) / gridSize) * gridSize;
      const startY = Math.floor((mouse.y - pulseRadius) / gridSize) * gridSize;
      const endY = Math.ceil((mouse.y + pulseRadius) / gridSize) * gridSize;

      for (let x = startX; x <= endX; x += gridSize) {
        if (x < 0 || x > canvas.width) continue;
        const dx = Math.abs(x - mouse.x);
        if (dx < pulseRadius) {
          const opacity = 1 - (dx / pulseRadius);
          ctx.globalAlpha = opacity * 0.3;
          ctx.moveTo(x, Math.max(0, mouse.y - pulseRadius));
          ctx.lineTo(x, Math.min(canvas.height, mouse.y + pulseRadius));
        }
      }
      for (let y = startY; y <= endY; y += gridSize) {
        if (y < 0 || y > canvas.height) continue;
        const dy = Math.abs(y - mouse.y);
        if (dy < pulseRadius) {
          const opacity = 1 - (dy / pulseRadius);
          ctx.globalAlpha = opacity * 0.3;
          ctx.moveTo(Math.max(0, mouse.x - pulseRadius), y);
          ctx.lineTo(Math.min(canvas.width, mouse.x + pulseRadius), y);
        }
      }
      ctx.stroke();
      ctx.globalAlpha = 1.0;

      // 4. Draw Data Nodes (Revealed by pulse)
      nodes.forEach(node => {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < pulseRadius) {
          const opacity = (1 - (dist / pulseRadius)) * 0.8;
          ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.font = '8px monospace';
          ctx.fillText(node.val, node.x, node.y);
          
          // Tiny dot
          ctx.beginPath();
          ctx.arc(node.x - 4, node.y - 3, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
    />
  );
}
