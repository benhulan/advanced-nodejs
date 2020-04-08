const dns = require('dns'); // name -- address

// lookup uses libuv threads
dns.lookup('google.com', (err, address) => {
	console.log(address); // '172.217.2.238'
});

// dns.resolve4() is the equivalent network (non-libuv) method returning ipv4 addresses
dns.resolve4('google.com', (err, address) => {
	console.log(address);
});

// default record type of dns.resolve() is 'A'
// example dns.resolveMx() is equivalent to...
dns.resolve('google.com', 'MX', (err, records) => {
	console.log(records);
});

// reverse lookup
dns.reverse('172.217.2.238', (err, hostnames) => {
	console.log(hostnames);
})