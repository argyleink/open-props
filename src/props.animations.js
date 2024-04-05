export default {
  "--animation-fade-in": "fade-in .5s var(--ease-3)",
  "--animation-fade-in-@": `
@keyframes fade-in {
  to { opacity: 1 }
}`,
  "--animation-fade-in-bloom": "fade-in-bloom 2s var(--ease-3)",
  "--animation-fade-in-bloom-@": `
@keyframes fade-in-bloom {
  0% { opacity: 0; filter: brightness(1) blur(20px) }
 10% { opacity: 1; filter: brightness(2) blur(10px) }
100% { opacity: 1; filter: brightness(1) blur(0) }
}`,
  "--animation-fade-in-bloom-@media:dark": `
@keyframes fade-in-bloom {
  0% { opacity: 0; filter: brightness(1) blur(20px) }
 10% { opacity: 1; filter: brightness(0.5) blur(10px) }
100% { opacity: 1; filter: brightness(1) blur(0) }
}`,
  "--animation-fade-out": "fade-out .5s var(--ease-3)",
  "--animation-fade-out-@": `
@keyframes fade-out {
  to { opacity: 0 }
}`,
  "--animation-fade-out-bloom": "fade-out-bloom 2s var(--ease-3)",
  "--animation-fade-out-bloom-@": `
@keyframes fade-out-bloom {
100% { opacity: 0; filter: brightness(1) blur(20px) }
 10% { opacity: 1; filter: brightness(2) blur(10px) }
  0% { opacity: 1; filter: brightness(1) blur(0) }
}`,
  "--animation-fade-out-bloom-@media:dark": `
@keyframes fade-out-bloom {
100% { opacity: 0; filter: brightness(1) blur(20px) }
 10% { opacity: 1; filter: brightness(0.5) blur(10px) }
  0% { opacity: 1; filter: brightness(1) blur(0) }
}`,
  "--animation-scale-up": "scale-up .5s var(--ease-3)", 
  "--animation-scale-up-@": `
@keyframes scale-up {
  to { transform: scale(1.25) }
}`,
  "--animation-scale-down": "scale-down .5s var(--ease-3)", 
  "--animation-scale-down-@": `
@keyframes scale-down {
  to { transform: scale(.75) }
}`,
  "--animation-slide-out-up": "slide-out-up .5s var(--ease-3)", 
  "--animation-slide-out-up-@": `
@keyframes slide-out-up {
  to { transform: translateY(-100%) }
}`,
  "--animation-slide-out-down": "slide-out-down .5s var(--ease-3)", 
  "--animation-slide-out-down-@": `
@keyframes slide-out-down {
  to { transform: translateY(100%) }
}`,
  "--animation-slide-out-right": "slide-out-right .5s var(--ease-3)", 
  "--animation-slide-out-right-@": `
@keyframes slide-out-right {
  to { transform: translateX(100%) }
}`,
  "--animation-slide-out-left": "slide-out-left .5s var(--ease-3)", 
  "--animation-slide-out-left-@": `
@keyframes slide-out-left {
  to { transform: translateX(-100%) }
}`,
  "--animation-slide-in-up": "slide-in-up .5s var(--ease-3)", 
  "--animation-slide-in-up-@": `
@keyframes slide-in-up {
  from { transform: translateY(100%) }
}`,
  "--animation-slide-in-down": "slide-in-down .5s var(--ease-3)", 
  "--animation-slide-in-down-@": `
@keyframes slide-in-down {
  from { transform: translateY(-100%) }
}`,
  "--animation-slide-in-right": "slide-in-right .5s var(--ease-3)", 
  "--animation-slide-in-right-@": `
@keyframes slide-in-right {
  from { transform: translateX(-100%) }
}`,
  "--animation-slide-in-left": "slide-in-left .5s var(--ease-3)", 
  "--animation-slide-in-left-@": `
@keyframes slide-in-left {
  from { transform: translateX(100%) }
}`,
  "--animation-shake-x": "shake-x .75s var(--ease-out-5)", 
  "--animation-shake-x-@": `
@keyframes shake-x {
  0%, 100% { transform: translateX(0%) }
  20% { transform: translateX(-5%) }
  40% { transform: translateX(5%) }
  60% { transform: translateX(-5%) }
  80% { transform: translateX(5%) }
}`,
  "--animation-shake-y": "shake-y .75s var(--ease-out-5)", 
  "--animation-shake-y-@": `
@keyframes shake-y {
  0%, 100% { transform: translateY(0%) }
  20% { transform: translateY(-5%) }
  40% { transform: translateY(5%) }
  60% { transform: translateY(-5%) }
  80% { transform: translateY(5%) }
}`,
"--animation-shake-z": "shake-z 1s var(--ease-in-out-3)", 
"--animation-shake-z-@": `
@keyframes shake-z {
  0%, 100% { transform: rotate(0deg) }
  20% { transform: rotate(-2deg) }
  40% { transform: rotate(2deg) }
  60% { transform: rotate(-2deg) }
  80% { transform: rotate(2deg) }
}`,
  "--animation-spin": "spin 2s linear infinite", 
  "--animation-spin-@": `
@keyframes spin {
  to { transform: rotate(1turn) }
}`,
  "--animation-ping": "ping 5s var(--ease-out-3) infinite", 
  "--animation-ping-@": `
@keyframes ping {
  90%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}`,
  "--animation-blink": "blink 1s var(--ease-out-3) infinite", 
  "--animation-blink-@": `
@keyframes blink {
  0%, 100% {
    opacity: 1
  }
  50% {
    opacity: .5
  }
}`,
  "--animation-float": "float 3s var(--ease-in-out-3) infinite", 
  "--animation-float-@": `
@keyframes float {
  50% { transform: translateY(-25%) }
}`,
  "--animation-bounce": "bounce 2s var(--ease-squish-2) infinite", 
  "--animation-bounce-@": `
@keyframes bounce {
  25% { transform: translateY(-20%) }
  40% { transform: translateY(-3%) }
  0%, 60%, 100% { transform: translateY(0) }
}`,
  "--animation-pulse": "pulse 2s var(--ease-out-3) infinite", 
  "--animation-pulse-@": `
@keyframes pulse {
  50% { transform: scale(.9,.9) }
}`,
}
