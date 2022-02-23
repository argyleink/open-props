export default {
  "--animation-fade-in": "fade-in .5s var(--ease-3)",
  "--animation-fade-in-@": `
@keyframes fade-in {
  to { opacity: 1 }
}`,
  "--animation-fade-out": "fade-out .5s var(--ease-3)",
  "--animation-fade-out-@": `
@keyframes fade-out {
  to { opacity: 0 }
}`,
  "--animation-scale-up": "scale-up var(--scale-duration, 1ms) var(--ease-3)", 
  "--animation-scale-up-@": `
@keyframes scale-up {
  to { transform: scale(1.25) }
}`,
  "--animation-scale-down": "scale-down var(--scale-duration, 1ms) var(--ease-3)", 
  "--animation-scale-down-@": `
@keyframes scale-down {
  to { transform: scale(.75) }
}`,
  "--animation-slide-out-up": "slide-out-up var(--slide-duration, 2s) var(--slide-easing, steps(3, jump-both))", 
  "--animation-slide-out-up-@": `
@keyframes slide-out-up {
  to { transform: translateY(-100%) }
}`,
  "--animation-slide-out-down": "slide-out-down var(--slide-duration, 2s) var(--slide-easing, steps(3, jump-both))", 
  "--animation-slide-out-down-@": `
@keyframes slide-out-down {
  to { transform: translateY(100%) }
}`,
  "--animation-slide-out-right": "slide-out-right var(--slide-duration, 2s) var(--slide-easing, steps(3, jump-both))", 
  "--animation-slide-out-right-@": `
@keyframes slide-out-right {
  to { transform: translateX(100%) }
}`,
  "--animation-slide-out-left": "slide-out-left var(--slide-duration, 2s) var(--slide-easing, steps(3, jump-both))", 
  "--animation-slide-out-left-@": `
@keyframes slide-out-left {
  to { transform: translateX(-100%) }
}`,
  "--animation-slide-in-up": "slide-in-up var(--slide-duration, 2s) var(--slide-easing, steps(3, jump-both))", 
  "--animation-slide-in-up-@": `
@keyframes slide-in-up {
  from { transform: translateY(100%) }
}`,
  "--animation-slide-in-down": "slide-in-down var(--slide-duration, 2s) var(--slide-easing, steps(3, jump-both))", 
  "--animation-slide-in-down-@": `
@keyframes slide-in-down {
  from { transform: translateY(-100%) }
}`,
  "--animation-slide-in-right": "slide-in-right var(--slide-duration, 2s) var(--slide-easing, steps(3, jump-both))", 
  "--animation-slide-in-right-@": `
@keyframes slide-in-right {
  from { transform: translateX(-100%) }
}`,
  "--animation-slide-in-left": "slide-in-left var(--slide-duration, 2s) var(--slide-easing, steps(3, jump-both))", 
  "--animation-slide-in-left-@": `
@keyframes slide-in-left {
  from { transform: translateX(100%) }
}`,
  "--animation-shake-x": "shake-x var(--shake-duration, 3s) var(--shake-easing, steps(1))", 
  "--animation-shake-x-@": `
@keyframes shake-x {
  0%, 100% { transform: translateX(0%) }
  20% { transform: translateX(-5%) }
  40% { transform: translateX(5%) }
  60% { transform: translateX(-5%) }
  80% { transform: translateX(5%) }
}`,
  "--animation-shake-y": "shake-y var(--shake-duration, 3s) var(--shake-easing, steps(1))", 
  "--animation-shake-y-@": `
@keyframes shake-y {
  0%, 100% { transform: translateY(0%) }
  20% { transform: translateY(-5%) }
  40% { transform: translateY(5%) }
  60% { transform: translateY(-5%) }
  80% { transform: translateY(5%) }
}`,
  "--animation-spin": "spin 2s var(--spin-easing, steps(4, jump-start)) infinite", 
  "--animation-spin-@": `
@keyframes spin {
  to { transform: rotate(1turn) }
}`,
  "--animation-ping": "ping var(--ping-duration, 4s) var(--ping-easing, steps(4, jump-start)) infinite", 
  "--animation-ping-@": `
@keyframes ping {
  90%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}`,
  "--animation-blink": "blink var(--blink-duration, 2s) var(--ease-out-3) infinite", 
  "--animation-blink-@": `
@keyframes blink {
  0%, 100% {
    opacity: 1
  }
  50% {
    opacity: .5
  }
}`,
  "--animation-float": "float 3s var(--float-ease, steps(2, jump-start)) infinite", 
  "--animation-float-@": `
@keyframes float {
  50% { transform: translateY(-25%) }
}`,
  "--animation-bounce": "bounce var(--bounce-duration, 4s) var(--bounce-ease, steps(2)) infinite", 
  "--animation-bounce-@": `
@keyframes bounce {
  25% { transform: translateY(-20%) }
  40% { transform: translateY(-3%) }
  0%, 60%, 100% { transform: translateY(0) }
}`,
  "--animation-pulse": "pulse 2s var(--pulse-ease, steps(2, jump-start)) infinite", 
  "--animation-pulse-@": `
@keyframes pulse {
  50% { transform: scale(.9,.9) }
}`,
}
