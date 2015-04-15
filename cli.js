/* VanityParser / cli.js
 * command line interface for VanityParser
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var VanityParser = require('./vanity-parser.js');

VanityParser('blue.txt', function(data) {
	console.log(data);
});