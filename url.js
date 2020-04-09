// Node repl
// these commands can be run from the terminal via `node -p "[COMMAND]"` 
// or paste them individually into a running node repl

url.parse('https://www.google.com/search?q=cat+gifs'); // breaks down the url into parsed chunks
url.parse('https://www.google.com/search?q=cat+gifs', true).query.q; // returns 'cat gifs'

// does the reverse of parse:
url.format({protocol: 'https',
	host: 'www.google.com',
	search: '?q=cat+gifs',
	pathname: '/search'
});

// convert an object into a usable query string
querystring.stringify({
	name: 'Samer Buna',
	website: 'jsComplete.com/samer-buna'
});

// does the reverse of querystring.stringify
querystring.parse('name=Samer%20Buna&website=jsComplete.com%2Fsamer-buna');