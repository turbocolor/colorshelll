const repl = require('node:repl');
const os = require('node:os');
const gradient = require('gradient-string');
const local = repl.start();
const osinfo = (os.hostname()+'-'+os.platform()+'-'+os.version())

let startgradient = gradient('red','blue');
let ocean = gradient(['#86efac','#3b82f6','#9333ea']);
let night = gradient(['#374151','#111827','#000']);
let rainbow = gradient('red','orange','yellow','green','cyan','blue','purple');
let fire = gradient('red','orange','yellow');
let space = gradient(['#2563eb','#4338ca','#581c87']);
let forest = gradient(['#65a30d','#16a34a','#15803d']);
let air = gradient(['#cffafe','#e0f2fe','#dbeafe']);
let water = gradient(['#67e8f9','#7dd3fc','#93c5fd']);
let startstr = startgradient("Basic Colors");
let secondstr = startgradient("Gradients");

let str1 = startgradient("▬▬▬▬▬▬Turbo▬▬▬▬▬▬")
let str2 = ocean("▬▬▬▬▬▬Ocean▬▬▬▬▬▬")
let str3 = night("▬▬▬▬▬▬Night▬▬▬▬▬▬")
let str4 = rainbow("▬▬▬▬▬▬Rainbow▬▬▬▬▬▬")
let str5 = fire("▬▬▬▬▬▬Fire▬▬▬▬▬▬")
let str6 = space("▬▬▬▬▬▬Space▬▬▬▬▬▬")
let str7 = forest("▬▬▬▬▬▬Forest▬▬▬▬▬▬")
let str8 = air("▬▬▬▬▬▬Air▬▬▬▬▬▬")
let str9 = water("▬▬▬▬▬▬Water▬▬▬▬▬▬")

console.log("colorshelll-node --start\n")
console.log(startstr);
console.log('\033[31m■ Red Foreground\n\033[32m■ Green Foreground\n\033[33m■ Yellow Foreground\n\033[34m■ Blue Foreground\n\033[35m■ Magenta Foreground\n\033[36m■ Cyan Foreground\n\033[37m■ White Foreground\n\033[30m■ Black Foreground\n\033[34m')
console.log(secondstr);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
console.log(str7);
console.log(str8);
console.log(str9);
console.log('@turbocolor/colorshelll@0.0.5 on ', osinfo);

local.on('exit', () => {
    console.log('exiting colorshelll');
    process.exit();
});  