// Test auto-complete in your IDE:

import op from "../";
op["--animation-blink"] // auto-completes!
op.animationBlink // camelCase API also auto-completes!
op["--animation-blink-@"]
op.animationBlinkAt // "-@" gets turned into "At"

import opFromSrc from "../src";
opFromSrc["--animation-blink"]
opFromSrc.animationBlink

import {animations} from "../src";
animations["--animation-blink"]
animations.animationBlink

import Animations from "../src/animations";
Animations["--animation-blink-@"]
Animations.animationBlinkAt
Animations["--animation-slide-in-down-@"]
Animations.animationSlideInDownAt
