const repl = require('node:repl');
const local = repl.start();

console.log('\033[31m■ Red Foreground\n\033[32m■ Green Foreground\n\033[33m■ Yellow Foreground\n\033[34m■ Blue Foreground\n\033[35m■ Magenta Foreground\n\033[36m■ Cyan Foreground\n\033[37m■ White Foreground\n\033[30m■ Black Foreground\n\033[34m')

local.on('exit', () => {
    console.log('exiting colorshelll');
    process.exit();
});