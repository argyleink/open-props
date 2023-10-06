export const rangeToPercent = range => {
  const max = range.getAttribute('max') || 100
  const percent = range.value / max * 100

  range.style.setProperty('--track-fill', `${parseInt(percent)}%`)
}