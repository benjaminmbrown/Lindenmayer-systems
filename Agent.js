var Agent = function(todo,length,theta){
	
	this.todo = todo;
	this.length = length;
	this.thetat = theta;

	this.render = function(){

	}
	this.setLength = function(length){
		this.length = length;

	}

	this.modifyLength = function(percent){
		this.length *= percent;
	}

	this.setTodo = function(todo){
		this.todo = todo;
	}
}
