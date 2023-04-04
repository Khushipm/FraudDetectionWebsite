import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableCell } from '@windmill/react-ui'

const data = [
  {
    id: 1,
    name: 'John Doe',
    age: 32,
    occupation: 'Developer',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 26,
    occupation: 'Designer',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    age: 45,
    occupation: 'Manager',
  },
]

const TableComponent = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Occupation</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((person) => (
          <TableRow key={person.id}>
            <TableCell>{person.name}</TableCell>
            <TableCell>{person.age}</TableCell>
            <TableCell>{person.occupation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableComponent
