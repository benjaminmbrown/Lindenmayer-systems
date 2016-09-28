var Lsystem = function(axiom,ruleset){
	this.axiom = axiom;
	this.ruleset = r;
	this.generation = 0;



	this.update = function(){


	}

	this.checkAgainstRules = function(){


	}

	this.display = function(){	
		
		this.count = 0;

		this.next = '';
		for(var i =0; i < this.axiom.length ; i++){
		  var c = this.axiom.charAt(i);
		  if(c ==='A'){
		  	this.next+='AB';

		  }else if(c==='B'){
		  	this.next+='A';
		  }
		}
		this.axiom = this.next;
		this.count++;
		console.log(this.axiom);
	}

	this.getAxiom = function(){
		return this.axiom;

	}

	this.getGeneration = function(){
		this.generation;
	}
}