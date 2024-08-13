import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button } from "flowbite-react";

function EditBooks() {
  const { id } = useParams();
  const { bookTitle, authorName, imageUrl, categories, bookDescription } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "History",
    "Politics",
    "Science Fiction",
    "Fantasy",
    "Dystopian",
    "Classic",
    "Horror",
    "Romance",
    "Historical Fiction"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(categories || bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;  // Ensure consistency with the useLoaderData naming.
    const bookDescription = form.bookDescription.value;
    const category = selectedBookCategory;
    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      bookDescription,
      category,
    };

    fetch(`http://localhost:5001/book/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj),
    })
    .then((response) => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then((data) => {
      alert("Book data edited successfully");
      // Add logic to navigate or update the UI here
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      alert(`There was a problem uploading the book: ${error.message}`);
    });

    console.log('Updated book data:', updateBookObj);
  };

  return (
    <div>
      <section className="text-gray-600 body-font bg-white rounded-lg m-5">
        <div className="container px-5 py-24">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Update Book
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Update your books here. The book details will be saved in a database.
            </p>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="bookTitle"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Book Title
                    </label>
                    <input
                      type="text"
                      id="bookTitle"
                      defaultValue={bookTitle}
                      name="bookTitle"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="authorName"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Author Name
                    </label>
                    <input
                      type="text"
                      defaultValue={authorName}
                      id="authorName"
                      name="authorName"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="bookCategory"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Book Category
                    </label>
                    <select
                      name="bookCategory"
                      id="bookCategory"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={selectedBookCategory}
                      onChange={handleChangeSelectedValue}
                    >
                      {bookCategories.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="bookDescription"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Book Description
                    </label>
                    <textarea
                      id="bookDescription"
                      name="bookDescription"
                      defaultValue={bookDescription}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="imageURL"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Image URL
                    </label>
                    <input
                      type="text"
                      id="imageURL"
                      name="imageURL"
                      defaultValue={imageUrl}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="publishedYear"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Published Year
                    </label>
                    <input
                      type="text"
                      id="publishedYear"
                      name="publishedYear"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <Button className="text-white bg-indigo-400 border-none" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default EditBooks;
