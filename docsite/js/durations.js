// Duration Demo Controls
const durationDemo = document.querySelector('.duration-demo')
const durationSelect = document.querySelector('.duration-select')
const durationValue = document.querySelector('.duration-value')

if (durationDemo && durationSelect) {
  const ball = durationDemo.querySelector('.duration-ball')
  
  const updateValue = () => {
    const selectedDuration = durationSelect.value
    if (durationValue) {
      const computedStyle = getComputedStyle(document.documentElement)
      const value = computedStyle.getPropertyValue(`--${selectedDuration}`).trim()
      durationValue.textContent = value || `var(--${selectedDuration})`
    }
  }
  
  const playAnimation = () => {
    const selectedDuration = durationSelect.value
    
    // Update the displayed value
    updateValue()
    
    // Reset animation by removing the style
    ball.style.animation = 'none'
    // Force reflow to restart animation
    void ball.offsetWidth
    
    // Apply new animation with selected duration
    ball.style.animation = `duration-demo-bounce var(--${selectedDuration}) var(--ease-out-3) forwards`
  }

  // Update value when selection changes
  durationSelect.addEventListener('change', () => {
    updateValue()
    playAnimation()
  })
  
  // Play button functionality
  const playButton = document.querySelector('.duration-demo-container .play-button')
  if (playButton) {
    playButton.addEventListener('click', playAnimation)
  }

  // Initialize with selected value
  updateValue()
}
