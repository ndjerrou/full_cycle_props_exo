const EmployeeList = ({ employees }) => {
  return (
    <ul>
      {employees.map(emp => (
        <li key={emp.id}>{emp.firstName}</li>
      ))}
    </ul>
  );
};
export default EmployeeList;
