const repl = require('repl');

let r = repl.start({
	ignoreUnderfined: true,
	replMode: repl.REPL_MODE_STRICT
});

// r.context.lodash = require('lodash');