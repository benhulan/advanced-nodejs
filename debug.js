function negativeSum(...args) {
	return args.reduce((arg, total) => {
		return total-arg; // these are intentionally reversed
	}, 0);
}

console.log(
	negativeSum(1, 5, 10)
);

// node debug debug.js
// help
// run, cont, next, step, out, backtrace, setBreakpoint, clearBreakpoint
// sb(2)
// repl // allows you to inspect code real-time
// args // should now log the value of args variable at line 2
// sb(3)
// watch('arg', 'total')
// cont // continue code until next breakpoint
// logs arg = 0, total = 1
// list(3) // pass in number of lines before and after breakpoint
// cb() // clear breakpoints