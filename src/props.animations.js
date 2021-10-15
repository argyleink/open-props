const Animations = {
  "--animation-fade-in": ["op-fade-in .5s var(--ease-3)", `
@keyframes op-fade-in {
  to { opacity: 1 }
}`],
  "--animation-fade-out": ["op-fade-out .5s var(--ease-3)", `
@keyframes op-fade-out {
  to { opacity: 0 }
}`],
  "--animation-scale-up": ["op-scale-up .5s var(--ease-3)", `
@keyframes op-scale-up {
  to { transform: scale(1.25) }
}`],
  "--animation-scale-down": ["op-scale-down .5s var(--ease-3)", `
@keyframes op-scale-down {
  to { transform: scale(.75) }
}`],
  "--animation-slide-out-up": ["op-slide-out-up .5s var(--ease-3)", `
@keyframes op-slide-out-up {
  to { transform: translateY(-100%) }
}`],
  "--animation-slide-out-down": ["op-slide-out-down .5s var(--ease-3)", `
@keyframes op-slide-out-down {
  to { transform: translateY(100%) }
}`],
  "--animation-slide-out-right": ["op-slide-out-right .5s var(--ease-3)", `
@keyframes op-slide-out-right {
  to { transform: translateX(100%) }
}`],
  "--animation-slide-out-left": ["op-slide-out-left .5s var(--ease-3)", `
@keyframes op-slide-out-left {
  to { transform: translateX(-100%) }
}`],
  "--animation-slide-in-up": ["op-slide-in-up .5s var(--ease-3)", `
@keyframes op-slide-in-up {
  from { transform: translateY(100%) }
}`],
  "--animation-slide-in-down": ["op-slide-in-down .5s var(--ease-3)", `
@keyframes op-slide-in-down {
  from { transform: translateY(-100%) }
}`],
  "--animation-slide-in-right": ["op-slide-in-right .5s var(--ease-3)", `
@keyframes op-slide-in-right {
  from { transform: translateX(-100%) }
}`],
  "--animation-slide-in-left": ["op-slide-in-left .5s var(--ease-3)", `
@keyframes op-slide-in-left {
  from { transform: translateX(100%) }
}`],
  "--animation-shake-x": ["op-shake-x .75s var(--ease-out-5)", `
@keyframes op-shake-x {
  0%, 100% { transform: translateX(0%) }
  20% { transform: translateX(-5%) }
  40% { transform: translateX(5%) }
  60% { transform: translateX(-5%) }
  80% { transform: translateX(5%) }
}`],
  "--animation-shake-y": ["op-shake-y .75s var(--ease-out-5)", `
@keyframes op-shake-y {
  0%, 100% { transform: translateY(0%) }
  20% { transform: translateY(-5%) }
  40% { transform: translateY(5%) }
  60% { transform: translateY(-5%) }
  80% { transform: translateY(5%) }
}`],

  "--animation-spin": ["op-spin 2s linear infinite", `
@keyframes op-spin {
  to { transform: rotate(1turn) }
}`],
  "--animation-ping": ["op-ping 5s var(--ease-out-3) infinite", `
@keyframes op-ping {
  90%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}`],
  "--animation-blink": ["op-blink 1s var(--ease-out-3) infinite", `
@keyframes op-blink {
  0%, 100% {
    opacity: 1
  }
  50% {
    opacity: .5
  }
}`],
  "--animation-float": ["op-float 3s var(--ease-inout-3) infinite", `
@keyframes op-float {
  50% { transform: translateY(-25%) }
}`],
  "--animation-bounce": ["op-bounce 2s var(--ease-squish-2) infinite", `
@keyframes op-bounce {
  25% { transform: translateY(-20%) }
  40% { transform: translateY(-3%) }
  0%, 60%,100% { transform: translateY(0) }
}`],
  "--animation-pulse": ["op-pulse 2s var(--ease-out-3) infinite", `
@keyframes op-pulse {
  50% { transform: scale(.9,.9) }
}`],
}

export default Animations