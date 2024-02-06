import { useState } from 'react';

import EmployeeList from './components/EmployeeList';
import SearchBar from './components/SearchBar';

function App() {
  const [employees, setEmployees] = useState([
    {
      id: '1',
      firstName: 'Pierre',
      age: 28,
      city: 'Paris',
      work: 'Teacher',
    },
    {
      id: '2',
      firstName: 'Sophie',
      age: 8,
      city: 'Paris',
      work: 'Teacher',
    },
    {
      id: '3',
      firstName: 'Thibault',
      age: 50,
      city: 'Paris',
      work: 'Engineer',
    },
  ]);

  const onSearchEmployee = searchTerm => {
    const originalEmployees = [...employees];

    // @TODO
    const filteredEmployees = employees.filter(emp =>
      emp.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(filteredEmployees);

    if (!filteredEmployees.length) setEmployees(originalEmployees);
    else setEmployees(filteredEmployees);
  };
  const obj = {
    class: 'fsd',
    students: 25,
    working: 'JS',
  };
  return (
    <>
      <SearchBar onSearchEmployee={onSearchEmployee} />
      {/* <EmployeeList
        employees={employees}
        class={obj.class}
        students={obj.students}
        working={obj.working}
      /> */}
      <EmployeeList employees={employees} {...obj} />
    </>
  );
}

export default App;
