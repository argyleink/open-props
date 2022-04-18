// Test auto-complete and type checks in your IDE:

import OpenProps from "../types";
import Animations from "../types/props.animations";

const anim = Animations;
anim["--animation-blink"];
// anim["--animation-blink"] = 1; // TS complains if you try to assign a non-string
anim["--animation-blink"] = 'some string works';

const op = OpenProps;
// op.someString = 1; // TS complains if you try to assign a non-string
// op.someString = 'this won't work'; // TS complains if you try to assign a string that's not included
op["--animation-blink"] // auto-completes!
op["--size-1"] // also auto-completes! all props are available on the top-level OpenProps object
op.animationBlink // camelCase API also auto-completes!