/* VanityParser / test / basic.js
 * basic test
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var vows = require('vows'),
    assert = require('assert'),
    fs = require('fs'),
    VanityParser = require('../vanity-parser.min.js');

var assets = {
	'1js': JSON.parse(fs.readFileSync('./test/assets/1js.json', 'utf8')),
	'all': JSON.parse(fs.readFileSync('./test/assets/all.json', 'utf8'))	
};

vows.describe('basic').addBatch({
    'typeof VanityParser': {
        topic: function() {
        	return typeof VanityParser;
        },
        'is a function': function(topic) {
            assert.equal(topic, 'function');
        }
    },
    'VanityParser with a single file': {
        topic: function() {
        	VanityParser('./test/assets/1js', this.callback);
        },
        'does not error': function(err, topic) {
        	assert.isNull(err);
        },
        'can parse': function(err, topic) {
            assert.deepEqual(topic, assets['1js']);
        },
    },
    'VanityParser with multiple files': {
        topic: function() {
        	VanityParser(['./test/assets/1js', './test/assets/1xD', './test/assets/mixed'], this.callback);
        },
        'does not error': function(err, topic) {
        	assert.isNull(err);
        },
        'can parse': function(err, topic) {
            assert.deepEqual(topic, assets['all']);
        },
    }
}).export(module);