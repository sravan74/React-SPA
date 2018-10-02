class person {
    name;
    age;

    constructor(firstname, dob) {
        this.name = firstname;
        this.age = dob
    }

    ageTillRetirement() {
        return 65 - this.age;
    }
}

export class student extends person {
    std;
    constructor(firstname, dob, std) {
        super(firstname, dob);
        this.std = std;
    }
}

export class teacher extends person {
    skills = [];
    constructor(firstname, dob, skills) {
        super(firstname, dob);
        this.skills = skills;
    }
}

var john = new teacher()
var tina = new student()
