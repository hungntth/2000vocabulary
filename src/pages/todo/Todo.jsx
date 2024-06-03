/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, Container } from "react-bootstrap";
import TodoTableComponent from "../../components/todo/TodoTableComponent";
import TodoApi from "../../api/TodoApi";

const TodoPage = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      getAllCategories();
   }, []);

   const getAllCategories = async () => {
      const data = await TodoApi.getAll();
      setCategories(data.content);
   }
   return (
      <>
         <Helmet title="Account" />
         <Container fluid className="p-0">
            <h1 className="h3 mb-3">Todo Page</h1>

            <Card>
               <Card.Body>
                  <TodoTableComponent categories={categories} />
               </Card.Body>
            </Card>
         </Container>
      </>
   )
};

export default TodoPage;
