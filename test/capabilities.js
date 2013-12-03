var sinon = require('sinon'),
	should = require('should'),
	MockGenericSocket = require('../lib/stub.js');
	irc = require('../lib/irc.js'),
	Events = irc.Events,
	Client = irc.Client;

var network = Object.freeze({
    nick : 'testbot',
    user : 'testuser',
    server : 'irc.test.net',
    realname: 'realbot',
    port: 6667,
    secure: false
});

describe('IRC Events', function () {
	it('registered event should have nick property', function (done) {
		var socket = new Client('key', network, MockGenericSocket);
		Events.on('key.registered', function(o) {
			o.should.have.property('nick');
			o.nick.should.equal('testbot');
			done();
		});
	});
});