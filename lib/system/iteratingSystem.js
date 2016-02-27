/**
 * The Iterating System (based on artemis)
 * @author : episanchez
 */

var EntitySystem = require('./entitySystem');
var util = require('util');

var IteratingSystem = function(interval){
	EntitySystem.call(this);

};

util.inherits(IteratingSystem, EntitySystem);

module.exports = IteratingSystem;

IteratingSystem.prototype.process = function(entity){
	throw 'need to be implemented';
};

IteratingSystem.prototype.processSystem = function(){
	var entities = this.subscription.getEntities();

	for (var i = 0; i < entities.length; i++){
		this.process(entities[i]);
	}
};