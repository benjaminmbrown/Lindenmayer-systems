var Agent = function(todo,length,theta){
	
	this.todo = todo;
	this.length = length;
	this.thetat = theta;

	this.render = function(){
		stroke(255);

		for(var i = 0 i < this.todo.length; i++){
			var c = this.todo.chartAt(i);

			if(c==='F' || c==='G'){
				line(0,0,this.length,0);
				translate(this.length,0);
			}
			else if( c==='+'){
				rotate(this.theta);
			}
			else if( c==='-'){
				rotate(-this.theta);
			}
			else if( c==='['){
				push();
			}
			else if(c ===']'){
				pop();
			}
		}
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
