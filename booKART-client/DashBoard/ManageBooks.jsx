import React, { useState, useEffect } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

function ManageBooks() {
  const [allBooks, setAllBooks] = useState([]);
  function handleDelete(id) {
    console.log(id);
    
  }

  useEffect(() => {
    fetch("http://localhost:5001/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);
  function handleDelete(id){
    fetch(`http://localhost:5001/book/${id}`,{
      method: 'DELETE',
    }).then(res=>res.json()).then(data =>{ alert("Book deleted")
      // setAllBooks(data);
    })
  }

  return (
    <div className='w-full pt-5 h-full'>
      <h2 className='text-4xl bg-white p-5 rounded-md font-bold text-center'>Manage Books</h2>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Book name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allBooks.map((book) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={book._id}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>1000/-</Table.Cell>
                <Table.Cell>

                  <Link href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 "
                   to={`/admin/dashboard/edit-books/${book._id}`}>
                    Edit
                  </Link>
                  <button onClick={()=>handleDelete(book._id)} className=' px-4 py-1 font-semibold text-red-600 rounded-sm hover:underline'>Delete</button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default ManageBooks;
