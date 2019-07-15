function Teacher( name ) {
    this.name = name;

    this.gradeTrust = function( student ) {
        if (student.getTrust() < 75 ) {
            return "Kém";
        } else {
            return "Tốt";
        }
    }
}
