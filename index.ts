import inquirer from "inquirer";
class Student {
    name : string;
    constructor(n:string) {
        this.name = n
    }


}
class person {
    students : Student[] = []
    addstudent (obj:Student){
        this.students.push(obj)
    }
}
const persons = new  person()
const program = async (persons : person) => {
    do {
        console.log ("Wellcome")


        let answer = await inquirer.prompt ({
            name: "qes",
            type: "list",
            message: "Whom you like to interact with?",
            choices: ["staff", "student", "exit"]
        })

        if (answer.qes === "staff") {
            console.log ("You approach the staff room")
        } else if (answer.qes == "student") {
            const ans = await inquirer.prompt ({
                name: "st",
                type: "input",
                message: "Enter the student's name you wish to engage with "
            })
            const student = persons.students.find (val => val.name === ans.st)
            if (!student) {
                let name = new Student (ans.st)
                persons.addstudent (name)
                console.log (`Hello ${name.name} nice to meet you` + "\n New Student added" + "\nCurrent student list")
                console.log (persons.students)
            } else {
                console.log (`Hello ${student.name} nice to see you again !` + "\nExitig student list")
                console.log (persons.students)

            }
        } else if (answer.qes == "exit") {
            console.log ("Exiting the program")
            process.exit()
        }

    }while(true)
}
program(persons)
