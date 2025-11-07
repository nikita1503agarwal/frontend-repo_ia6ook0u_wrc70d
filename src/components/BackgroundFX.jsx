import { useEffect, useRef } from 'react'

// Animated gradient background using canvas
export default function BackgroundFX() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const dpr = Math.max(1, window.devicePixelRatio || 1)
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
    }
    resize()
    window.addEventListener('resize', resize)

    const blobs = Array.from({ length: 6 }).map((_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 120 * dpr + Math.random() * 60 * dpr,
      vx: (Math.random() - 0.5) * 0.4 * dpr,
      vy: (Math.random() - 0.5) * 0.4 * dpr,
      hue: 200 + i * 25,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      blobs.forEach(b => {
        b.x += b.vx
        b.y += b.vy
        if (b.x < -b.r) b.x = canvas.width + b.r
        if (b.x > canvas.width + b.r) b.x = -b.r
        if (b.y < -b.r) b.y = canvas.height + b.r
        if (b.y > canvas.height + b.r) b.y = -b.r

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        grad.addColorStop(0, `hsla(${b.hue}, 90%, 65%, 0.7)`)
        grad.addColorStop(1, `hsla(${b.hue + 30}, 90%, 65%, 0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/90" />
    </div>
  )
}
