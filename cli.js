/* VanityParser / cli.js
 * command line interface for VanityParser
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var VanityParser = require('./vanity-parser.min.js');

VanityParser(process.argv.slice(2), function(err, data) {
	if(err) {
		console.error(JSON.stringify({'Error': err}));
	} else {
		console.log(JSON.stringify(data));
	}
});