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
    const filteredEmployees = employees.filter(emp =>
      emp.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(filteredEmployees);

    // ?
    setEmployees(filteredEmployees);
  };
  return (
    <>
      <SearchBar onSearchEmployee={onSearchEmployee} />
      <EmployeeList employees={employees} />
    </>
  );
}

export default App;
