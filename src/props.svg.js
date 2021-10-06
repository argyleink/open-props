const SVG = {
  '--grain': `url("data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  
  '--grain-filter-1': 'contrast(300%) brightness(100%)',
  '--grain-filter-2': 'contrast(200%) brightness(150%)',
  '--grain-filter-3': 'contrast(200%) brightness(250%)',
  '--grain-filter-4': 'contrast(200%) brightness(500%)',
  '--grain-filter-5': 'contrast(200%) brightness(1000%)',

  '--squircle-1': `url("data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 18.75 18.75, 0 75, 0 S 150, 18.75 150, 75 131.25, 150 75, 150 0, 131.25 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E")`,
  '--squircle-2': `url("data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 13.500000000000004 13.500000000000004, 0 75, 0 S 150, 13.500000000000004 150, 75 136.5, 150 75, 150 0, 136.5 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E")`,
  '--squircle-3': `url("data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 5.999999999999997 5.999999999999997, 0 75, 0 S 150, 5.999999999999997 150, 75 144, 150 75, 150 0, 144 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E")`,
}

export default SVG
