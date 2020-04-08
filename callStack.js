// EXAMPLE 1: Event Loop Call Stack Order
// add will throw an error after 'anonymous', printDouble and double are called

const add = (a, b) => x + b;

const double = a => add(a, a);

const printDouble = a => {
	const output = double(a);
	console.log(output);
};

printDouble(9);

// EXAMPLE 2: Slow operations
// This demonstrates the primary work of the Event Loop

// const add = (a, b) => console.log(a+b);

// const slowAdd = (a, b) => {
//   // version A:
// 	for(let i=0; i<999999999; i++) {}
// 	add(a, b);

//   // version B:
//   // This version is interesting because setTimeout returns a callback, which will be delayed
//   // in the queue even though its parent slowAdd has already popped off the stack
// 	setTimeout(() => {
//   	add(a, b);
// 	}, 3000);
// };

// const a = slowAdd(3, 3);
// const b = slowAdd(4, 4);
// const c = slowAdd(5, 5);
