/* eslint-disable prettier/prettier */
import React from "react";
import { Table } from "react-bootstrap";
import { Edit2, Trash } from "react-feather";

const TodoTableComponent = ({ categories }) => {
   return (
     <Table striped hover bordered>
       <thead>
         <tr>
           <th style={{ width: "10%" }}>Id</th>
           <th style={{ width: "30%" }}>Name</th>
           <th style={{ width: "30%" }}>Description</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>
         <tr key={1}>
           <td>1</td>
           <td>category.name</td>
           <td>category.description</td>
           <td className="table-action">
             <Edit2 className="align-middle me-1" size={18} />
             <Trash className="align-middle" size={18} />
           </td>
         </tr>
       </tbody>
     </Table>
   );
};

export default TodoTableComponent;
