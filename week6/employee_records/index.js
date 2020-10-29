let employees = [
    {name: "Melissa"}
    ,
     {jobTitle: "Software Engineer"}
     , 
     {Salary: 185000}
     , 
     {status: "Contract."}
    ,
    {name: "Sun"}
    ,
     {jobTitle: "Fullstack Engineer"}
     , 
     {Salary: 184000}
     , 
     {status: "Full Time."},

     {name: "Ralph"}
     ,
      {jobTitle: "Frontend Engineer"}
      , 
      {Salary: 186000}
      , 
      {status: "Fullstack."}
];

            function EmployeeInfo(name, jobTitle, salary, status ="Full Time"){
                this.name = name;
                this.jobTitle = jobTitle;
                this.salary = salary;
                this.status = status;
                }
               
                function printEmployeeForm(EmployeeInfo){
                    console.log(EmployeeInfo.name + " Job Title: "+ EmployeeInfo.jobTitle + " Salary: " + EmployeeInfo.salary + " status: " + EmployeeInfo.status + ".");
                }

                var employee1 = new EmployeeInfo('Melissa', 'Software Engineer', 185000, 'Full Time');
                var employee2 = new EmployeeInfo('Sun', 'Fullstack Engineer', 184000, 'Full Time');
                var employee3 = new EmployeeInfo('Ralph', 'Frontend Engineer', 186000, 'Full Time');

                employee1.status = "Contract";
                console.log(("Contract"));

                printEmployeeForm(employee1);
                printEmployeeForm(employee2);
                printEmployeeForm(employee3);
                
                
                // employee1.status = "Contract";
                // console.log(("Contract"));