/* VanityParser
 * parse text files from vanitygen into pretty JSON
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.VanityParser = factory();
  }
}(this, function() {
    var fs = require('fs'),
        S = require('string'),
        VanityParser;
    
    VanityParser = function(files, cb) {
        if(typeof files === 'string') {
            fs.readFile(files, function(err, data) {
                cb(VanityParser.parse(data));
            });
        }
    };

    VanityParser.magic = function(x, v, c) {
        if(v.indexOf(x) === 0) {
            c(S(v).replaceAll(x, '').s);
        }
    };

    VanityParser.parse = function(data) {
        var lines = S(data).lines(),
            lp = '';
            la = '';
            obj = {};

        lines.forEach(function(v, i) {
            VanityParser.magic('Pattern: ', v, function(v) {
                lp = v;

                if(!Array.isArray(obj[v])) {
                    obj[v] = [];
                }
            });

            VanityParser.magic('Address: ', v, function(v) {
                la = v;
            });

            VanityParser.magic('Privkey: ', v, function(v) {
                obj[lp].push({
                    Address: la,
                    Privkey: v
                });
            });
        });

        return obj;
    };

    return VanityParser;
}));
