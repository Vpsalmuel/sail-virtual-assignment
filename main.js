const workers = [{
        No: 1,
        FirstName: "Thompson",
        LastName: "Anthony",
        Age: 32,
        Sex: "Male",
        Position: "Head of Finance Deparment",
        Date_of_Employment: "17 / 07 / 2014"
    },
    {
        No: 2,
        FirstName: "Johnson",
        LastName: "Mary",
        Age: 23,
        Sex: "Female",
        Position: "Software Engineer",
        Date_of_Employment: "05 / 03 / 2014"
    },
    {
        No: 3,
        FirstName: "Chisom",
        LastName: "Onyeka",
        Age: 28,
        Sex: "Female",
        Position: "Human Resource Manager",
        Date_of_Employment: "21 / 06 / 2014"
    },
    {
        No: 4,
        FirstName: "Jide",
        LastName: "Olabisi",
        Age: 29,
        Sex: "Male",
        Position: "Assisant Head (Software Department)",
        Date_of_Employment: "05/06/2016"
    },
    {
        No: 5,
        FirstName: "Williams",
        LastName: "Ajayi",
        Age: 28,
        Sex: "Male",
        Position: "Head of Software Department",
        Date_of_Employment: "06/09/2015"
    },
    {
        No: 6,
        FirstName: "Nancy",
        LastName: "Chukwuemeka",
        Age: 27,
        Sex: "Female",
        Position: "Secretary",
        Date_of_Employment: "21 / 06 / 2014"
    },
    {
        No: 7,
        FirstName: "Chisom",
        LastName: "Onyeka",
        Age: 28,
        Sex: "Female",
        Position: "Human Resource Manager",
        Date_of_Employment: "21 / 06 / 2014"
    },
    {
        No: 8,
        FirstName: "Nicholas",
        LastName: "Uchemba",
        Age: 27,
        Sex: "Male",
        Position: "Software Enginneer",
        Date_of_Employment: "22/02/2020"
    },
    {
        No: 9,
        FirstName: "Halima",
        LastName: "Mohammed",
        Age: 27,
        Sex: "Female",
        Position: "Senior Finance Manager",
        Date_of_Employment: "30/05/2018"
    },
    {
        No: 10,
        FirstName: "Richard",
        LastName: "Adeyemi",
        Age: 41,
        Sex: "Male",
        Position: "C.E.O",
        Date_of_Employment: "17/11/2010"
    }
];








const table = document.getElementById("tableBody");
workers.map(Worker => {
    let row = table.insertRow();
    let num = row.insertCell(0);
    num.innerHTML = Worker.No;
    let f_name = row.insertCell(1);
    f_name.innerHTML = Worker.FirstName;
    let l_name = row.insertCell(2);
    l_name.innerHTML = Worker.LastName;
    let age = row.insertCell(3);
    age.innerHTML = Worker.Age;
    let sex = row.insertCell(4);
    sex.innerHTML = Worker.Sex;
    let position = row.insertCell(5);
    position.innerHTML = Worker.Position;
    let doe = row.insertCell(6);
    doe.innerHTML = Worker.Date_of_Employment;
});
