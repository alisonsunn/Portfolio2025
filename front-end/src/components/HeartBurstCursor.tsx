import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeartParticle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
  delay: number;
  distance: number;
  angle: number;
  velocity: { x: number; y: number };
}

const scaleOptions = [0.6, 0.8, 1.0, 1.3, 1.6, 2.0];
const preCalculatedAngles = Array.from(
  { length: 24 },
  () => Math.random() * 2 * Math.PI
);

export default function HeartBurstCursor() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);
  const heartIdRef = useRef(0);
  const isPressedRef = useRef(false);
  const pressStartTimeRef = useRef(0);
  const intervalRef = useRef<number | null>(null);
  const currentPositionRef = useRef({ x: 0, y: 0 });
  const lastUpdateRef = useRef(0);

  const createHeartBurst = useCallback(
    (x: number, y: number, pressDuration: number) => {
      const newHearts: HeartParticle[] = [];

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const maxScreenDistance = Math.max(screenWidth, screenHeight) * 1.2; 

      const baseDistance = Math.min(pressDuration * 20, maxScreenDistance); // 从15提升到20
      const maxDistance = 300 + baseDistance; // 从200提升到300

      // 在鼠标点击处生成更多爱心（中心区域）
      const centerHeartCount = 8; // 中心区域8个爱心
      const spreadHeartCount = 6; // 扩散区域6个爱心
      const totalHearts = centerHeartCount + spreadHeartCount;

      for (let i = 0; i < totalHearts; i++) {
        const isCenterHeart = i < centerHeartCount;

        // 中心区域的爱心距离更近，扩散区域的爱心距离更远
        const minDistance = isCenterHeart ? 20 : 150; // 扩散区域最小距离从100提升到150
        const maxDistanceForThisHeart = isCenterHeart ? 200 : maxDistance; // 中心区域最大距离从150提升到200

        // 使用预计算的角度，减少随机计算
        const angle =
          preCalculatedAngles[i % preCalculatedAngles.length] +
          (Math.random() - 0.5) * 0.5;
        const distance =
          minDistance + Math.random() * (maxDistanceForThisHeart - minDistance);

        // 更随机的速度变化
        const velocity = {
          x: (Math.random() - 0.5) * 8 + (Math.random() - 0.5) * 4, // 增加速度范围
          y: (Math.random() - 0.5) * 8 + (Math.random() - 0.5) * 4,
        };

        // 使用预定义的缩放选项
        const scale =
          scaleOptions[Math.floor(Math.random() * scaleOptions.length)];

        const newHeart: HeartParticle = {
          id: heartIdRef.current + i,
          x: x + (Math.random() - 0.5) * (isCenterHeart ? 15 : 25),
          y: y + (Math.random() - 0.5) * (isCenterHeart ? 15 : 25),
          rotation: Math.random() * 720,
          scale: scale,
          opacity: 1,
          delay: Math.random() * 0.15,
          distance,
          angle,
          velocity,
        };

        newHearts.push(newHeart);
      }

      // 批量更新状态，减少重渲染
      setHearts((prev) => {
        const updated = [...prev, ...newHearts];
        // 限制总数，避免内存泄漏
        return updated.slice(-80);
      });

      heartIdRef.current += totalHearts;
    },
    []
  );

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      if (e.button === 0) {
        isPressedRef.current = true;
        pressStartTimeRef.current = Date.now();
        currentPositionRef.current = { x: e.clientX, y: e.clientY };

        // 立即创建第一批爱心
        createHeartBurst(e.clientX, e.clientY, 0);

        // 大幅降低生成频率
        intervalRef.current = setInterval(() => {
          if (isPressedRef.current) {
            const now = Date.now();
            // 限制更新频率到200ms，避免过度渲染
            if (now - lastUpdateRef.current > 200) {
              const pressDuration = (now - pressStartTimeRef.current) / 1000;
              createHeartBurst(
                currentPositionRef.current.x,
                currentPositionRef.current.y,
                pressDuration
              );
              lastUpdateRef.current = now;
            }
          }
        }, 200); // 降低到200ms
      }
    },
    [createHeartBurst]
  );

  const handleMouseUp = useCallback(() => {
    isPressedRef.current = false;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isPressedRef.current) {
      currentPositionRef.current = { x: e.clientX, y: e.clientY };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleMouseDown, handleMouseUp, handleMouseMove]);

  const removeHeart = useCallback((id: number) => {
    setHearts((prev) => prev.filter((heart) => heart.id !== id));
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              x: heart.x,
              y: heart.y,
              scale: 0,
              opacity: 0,
              rotate: heart.rotation,
            }}
            animate={{
              x:
                heart.x +
                Math.cos(heart.angle) * heart.distance +
                heart.velocity.x * 80, // 从60提升到80
              y:
                heart.y +
                Math.sin(heart.angle) * heart.distance +
                heart.velocity.y * 80,
              scale: [0, heart.scale, 0],
              opacity: [0, 1, 0],
              rotate: heart.rotation + Math.random() * 360,
            }}
            transition={{
              duration: 2.5 + Math.random() * 1,
              delay: heart.delay,
              ease: "easeOut",
            }}
            onAnimationComplete={() => removeHeart(heart.id)}
            style={{
              position: "absolute",
              fontSize: `${14 + heart.scale * 6}px`,
              userSelect: "none",
              zIndex: 10000,
              willChange: "transform", // 优化GPU加速
            }}
          >
            💙
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
