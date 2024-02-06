const EmployeeList = props => {
  console.log(props);
  return (
    <ul>
      {props.employees.map(emp => (
        <li key={emp.id}>{emp.firstName}</li>
      ))}
    </ul>
  );
};
export default EmployeeList;
