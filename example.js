const zomboidrcon = require("./rcon.js");

async function run() {
    let rcon = await zomboidrcon.rconCommand("help");

    console.log(rcon);
}

run();
