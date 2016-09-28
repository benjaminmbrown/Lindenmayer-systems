var Lsystem = function(axiom, ruleset) {
    this.axiom = axiom;
    this.ruleset = ruleset;
    this.generation = 0;



    this.update = function() {


    }

    this.checkAgainstRules = function() {


    }

    this.generateLsystem = function() {

        this.count = 0;

        this.next = '';
        for (var i = 0; i < this.axiom.length; i++) {

            var c = this.axiom.charAt(i);
            for (var j = 0; j < this.ruleset.length; j++) {
                var a = this.ruleset[j].getA();

                if (a === c) {
                    c = this.ruleset[j].getB();
                    break;
                }
            }
            this.next += c;
        }
        this.axiom = this.next;
        this.count++;
        console.log(this.axiom);
    }

    this.getAxiom = function() {
        return this.axiom;

    }

    this.getGeneration = function() {
        this.generation;
    }
}
