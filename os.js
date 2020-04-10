// Node repl
// these commands can be run from the terminal via `node -p "[COMMAND]"` 
// or paste them individually into a running node repl

os.cpus(); // print info about your OS's CPUs (model, speed, time)

os.networkInterfaces().en0.map(i => i.address) // network interface IP and Mac addresses
os.networkInterfaces().wlp2s0.map(i => i.address) // on Linux

os.freemem(); // prints number of bytes of free memory in the system

os.tmpdir(); // where is the /tmp directory

os.type(); // type of OS such as 'Darwin' (OSX), 'Linux', 'Windows'

os.release(); // '16.1.0' (OSX), '5.3.0-46-generic' (Ubuntu), etc

os.userInfo(); // uid, gid, username, home directory and shell

os.constants(); // print system constants, which include error codes (errno), signals, priority levels