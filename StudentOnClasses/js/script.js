// classes
class User{
    constructor(name, surname, birthYear) {
        this._name = name;
        this._surname = surname;
        this._birthYear = birthYear;
    }
    
    get age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this._birthYear;
    }

    get fullName() {
        return `${this._name} ${this._surname}`;
    }
}

class Student extends User {
    #marks = new Array(30).fill(null);
    #visits = new Array(30).fill(null);

    constructor(name, surname, birthYear) {
        super(name, surname, birthYear);
    }

    present() {
        const index = this.#visits.indexOf(null);
        if (index !== -1) {
            this.#visits[index] = true;
        }
    }

    absent() {
        const index = this.#visits.indexOf(null);
        if (index !== -1) {
            this.#visits[index] = false;
        }
    }

    setMark(mark) {
        const index = this.#marks.indexOf(null);
        if (index !== -1 && mark >= 0 && mark <= 10) {
            this.#marks[index] = mark;
        }
    }

    get mediumMark() {
        let sum = 0;
        this.#marks.forEach(elem => {
            sum += elem;
        });
        return sum / this.#marks.length;
    }
 
    get mediumVisit() {
        let num = 0;
        this.#visits.forEach(elem => {
            if (elem === true) {
                num++;
            }
        });
        return num / this.#visits.length;
    }

    get summary() {
        if (this.mediumMark > 9 && this.mediumVisit > 0.9) {
            return `Середня оцінка: ${this.mediumMark} Середнє відвідування: ${this.mediumVisit} 
            Молодець! Так тримати!`;
        } else if (this.mediumMark > 9 || this.mediumVisit > 0.9) {
            return `Середня оцінка: ${this.mediumMark} Середнє відвідування: ${this.mediumVisit} 
            Норм, але можна постаратись і краще.`;
        } else if (this.mediumMark < 9 && this.mediumVisit < 0.9) {
            return `Середня оцінка: ${this.mediumMark} Середнє відвідування: ${this.mediumVisit} 
            Погано! Так ти нічому не навчишся.`;
        }
    }
}

class Teacher extends User{
    #groups = [];

    constructor(name, surname, birthYear) {
        super(name, surname, birthYear);
    }

    addGroup(group) {
        this.#groups.push(group);
    }

    changeStatus(group) {
        const foundGroup = this.#groups.find(g => g.name === group.name);
        if (foundGroup) {
            foundGroup.active = !foundGroup.active;
        }
    }

    get activeGroups() {
        return this.#groups.filter(group => group.active);
    }
}

//Examples
const student = new Student("Alex", "Melnik", 2007);
student.present();
student.setMark(8);
student.setMark(9);
student.setMark(10);

console.log(student.age);
console.log(student.fullName);
console.log(student.mediumMark);
console.log(student.mediumVisit);
console.log(student.summary);

const teacher = new Teacher("Yurii", "Ponomarenko", 1985);
teacher.addGroup({name: "Front-end", active: true });
teacher.addGroup({name: "Web-design", active: false });
console.log(teacher.activeGroups);
teacher.changeStatus("Web-design");
console.log(teacher.activeGroups);