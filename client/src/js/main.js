var canvasmain = document.getElementById("gamemain");
var ctx = canvasmain.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

import { setup3d } from "3dsetup.js";
setup3d();
