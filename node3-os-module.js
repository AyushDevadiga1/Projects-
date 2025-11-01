//                                                      os module

// required modules
const os = require('os');

// platform gives us the platform(os) of the system
console.log(os.platform());

// CPU architecture  x64 or x32
console.log(os.arch());

// CPU object of core information and no of cores in cpu
console.log(os.cpus());

//Information on the free memory
console.log(os.freemem());

//Information on the Total memory
console.log(os.totalmem());

// The home directory of the pc
console.log(os.homedir());

//Amount of time the system is been up (uptime)
console.log(os.uptime());