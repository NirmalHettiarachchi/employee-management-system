import React from "react";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "Nirmal",
      lastName: "Sankalpa",
      email: "nirmal@gmail.com",
    },
    {
      id: 2,
      firstName: "Sankalpa",
      lastName: "Hettiarachchi",
      email: "sankalpa@gmail.com",
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-border">
        <thead>
          <th>Employee ID</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email ID</th>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
