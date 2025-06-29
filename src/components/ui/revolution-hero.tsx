"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: {
  className?: string
  size?: number
  duration?: number
  borderWidth?: number
  anchor?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
}) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px)))",
        className,
      )}
    />
  )
}

interface RevolutionHeroProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  className?: string
}

export const RevolutionHero = React.forwardRef<HTMLElement, RevolutionHeroProps>(
  (
    {
      className,
      title = "REVOLUTION",
      subtitle = "The Future is Now",
      description = "Break boundaries. Unleash potential. Create the impossible.",
      primaryButtonText = "Start Revolution",
      secondaryButtonText = "Learn More",
      ...props
    },
    ref,
  ) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const mouseRef = React.useRef({ x: 0, y: 0 })
    const [intensity, setIntensity] = React.useState(1.0)

    const vertexShader = `
      attribute vec4 position;
      void main() {
        gl_Position = position;
      }
    `

    const fragmentShader = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_intensity;
      
      vec3 hash3(vec2 p) {
        vec3 q = vec3(dot(p, vec2(127.1, 311.7)), 
                      dot(p, vec2(269.5, 183.3)), 
                      dot(p, vec2(419.2, 371.9)));
        return fract(sin(q) * 43758.5453);
      }
      
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
        return mix(mix(dot(hash3(i + vec2(0.0,0.0)).xy, f - vec2(0.0,0.0)), 
                       dot(hash3(i + vec2(1.0,0.0)).xy, f - vec2(1.0,0.0)), u.x),
                   mix(dot(hash3(i + vec2(0.0,1.0)).xy, f - vec2(0.0,1.0)), 
                       dot(hash3(i + vec2(1.0,1.0)).xy, f - vec2(1.0,1.0)), u.x), u.y);
      }
      
      float fbm(vec2 p, int octaves) {
        float value = 0.0;
        float amplitude = 1.0;
        float frequency = 0.25;
        
        for(int i = 0; i < 10; i++) {
          if(i >= octaves) break;
          value += amplitude * noise(p * frequency);
          amplitude *= 0.52;
          frequency *= 1.13;
        }
        return value;
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 st = (uv - 0.5) * 2.0;
        st.x *= u_resolution.x / u_resolution.y;
        
        float time = u_time * 0.3;
        
        float dist1 = fbm(st * 2.0 + time * 1.2, 6) * 0.4;
        float dist2 = fbm(st * 3.0 - time * 0.8, 4) * 0.3;
        
        float streak = sin((st.x + dist1) * 20.0 + time * 3.0) * 0.5 + 0.5;
        streak = smoothstep(0.3, 0.7, streak);
        
        float shape = 1.0 - abs(st.x + dist1 * 0.6);
        shape = smoothstep(0.0, 1.0, shape);
        
        vec3 color1 = vec3(1.0, 0.1, 0.6);
        vec3 color2 = vec3(1.0, 0.3, 0.1);
        vec3 color3 = vec3(0.9, 0.1, 1.0);
        vec3 color4 = vec3(0.1, 0.5, 1.0);
        
        float gradient = 1.0 - uv.y;
        vec3 finalColor = mix(color4, color1, gradient);
        finalColor = mix(finalColor, color2, dist1);
        finalColor = mix(finalColor, color3, dist2);
        
        vec2 mouse = u_mouse / u_resolution.xy;
        mouse = (mouse - 0.5) * 2.0;
        mouse.x *= u_resolution.x / u_resolution.y;
        
        float mouseInfluence = 1.0 - length(st - mouse) * 0.8;
        mouseInfluence = max(0.0, mouseInfluence);
        mouseInfluence = smoothstep(0.0, 1.0, mouseInfluence);
        
        float finalIntensity = shape * streak * u_intensity;
        finalIntensity += mouseInfluence * 0.4;
        
        vec3 result = finalColor * finalIntensity;
        
        float bloom = smoothstep(0.4, 1.0, finalIntensity) * 0.3;
        result += bloom * finalColor;
        
        result = pow(result, vec3(0.85));
        
        float vignette = 1.0 - length(uv - 0.5) * 0.6;
        vignette = smoothstep(0.2, 1.0, vignette);
        
        vec3 bgColor = vec3(0.02, 0.01, 0.12);
        result = mix(bgColor, result, smoothstep(0.0, 0.4, finalIntensity));
        result *= vignette;
        
        gl_FragColor = vec4(result, 1.0);
      }
    `

    const createShader = React.useCallback((gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null

      gl.shaderSource(shader, source)
      gl.compileShader(shader)

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }

      return shader
    }, [])

    React.useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const gl = canvas.getContext("webgl")
      if (!gl) return

      const vertShader = createShader(gl, gl.VERTEX_SHADER, vertexShader)
      const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader)

      if (!vertShader || !fragShader) return

      const program = gl.createProgram()
      if (!program) return

      gl.attachShader(program, vertShader)
      gl.attachShader(program, fragShader)
      gl.linkProgram(program)

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program link error:", gl.getProgramInfoLog(program))
        return
      }

      const buffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

      const positionLocation = gl.getAttribLocation(program, "position")
      const timeLocation = gl.getUniformLocation(program, "u_time")
      const resolutionLocation = gl.getUniformLocation(program, "u_resolution")
      const mouseLocation = gl.getUniformLocation(program, "u_mouse")
      const intensityLocation = gl.getUniformLocation(program, "u_intensity")

      const startTime = Date.now()

      const resizeCanvas = () => {
        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width * window.devicePixelRatio
        canvas.height = rect.height * window.devicePixelRatio
        gl.viewport(0, 0, canvas.width, canvas.height)
      }

      resizeCanvas()
      window.addEventListener("resize", resizeCanvas)

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current.x = (e.clientX - rect.left) * window.devicePixelRatio
        mouseRef.current.y = (rect.height - (e.clientY - rect.top)) * window.devicePixelRatio
        setIntensity(1.2)
        setTimeout(() => setIntensity(1.0), 500)
      }

      canvas.addEventListener("mousemove", handleMouseMove)

      const animate = () => {
        const time = (Date.now() - startTime) * 0.001

        gl.useProgram(program)
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.enableVertexAttribArray(positionLocation)
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

        if (timeLocation) gl.uniform1f(timeLocation, time)
        if (resolutionLocation) gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height)
        if (mouseLocation) gl.uniform2f(mouseLocation, mouseRef.current.x, mouseRef.current.y)
        if (intensityLocation) gl.uniform1f(intensityLocation, intensity)

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        requestAnimationFrame(animate)
      }

      animate()

      return () => {
        window.removeEventListener("resize", resizeCanvas)
        canvas.removeEventListener("mousemove", handleMouseMove)
        gl.deleteProgram(program)
        gl.deleteBuffer(buffer)
      }
    }, [createShader, intensity, fragmentShader, vertexShader])

    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-screen w-full overflow-hidden bg-black text-white",
          className,
        )}
        {...props}
      >
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full" 
          style={{ background: "#000510" }} 
        />

        <div className="relative z-10 h-full min-h-screen flex flex-col justify-between p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <p className="text-gray-300 text-sm md:text-base uppercase tracking-wider font-bold">
              Break the boundaries
            </p>
            <p className="text-gray-300 text-sm md:text-base uppercase tracking-wider font-bold">
              Unleash your potential
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-end">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-left mb-8 md:mb-0"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {subtitle}
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-md mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold px-8 py-3 relative overflow-hidden"
                  >
                    {primaryButtonText}
                  </Button>
                  <BorderBeam 
                    size={250}
                    duration={12}
                    colorFrom="#ff0080"
                    colorTo="#00ffff"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
                >
                  {secondaryButtonText}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-right text-gray-300 text-xs md:text-sm max-w-xs"
            >
              <p className="mb-2 font-semibold text-white">The future belongs to those</p>
              <p className="mb-2 font-semibold text-white">who dare to dream bigger</p>
              <p className="mb-4 text-gray-400">Every revolution starts with a single spark</p>
              <p className="mb-2 text-gray-400">Your moment is now.</p>
              <p className="mb-2 text-gray-400">Your power is limitless.</p>
              <p className="mb-6 text-gray-400">Your impact will be legendary.</p>
              <p className="text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text font-bold">
                www.revolution.com
              </p>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          @keyframes border-beam {
            100% {
              offset-distance: 100%;
            }
          }
        `}</style>
      </section>
    )
  },
)
RevolutionHero.displayName = "RevolutionHero"

export default function RevolutionHeroDemo() {
  return (
    <RevolutionHero
      title="REVOLUTION"
      subtitle="The Future is Now"
      description="Break boundaries. Unleash potential. Create the impossible."
      primaryButtonText="Start Revolution"
      secondaryButtonText="Learn More"
    />
  )
}
