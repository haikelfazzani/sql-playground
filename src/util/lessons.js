const lessons = [
  {
    lesson: 'Create table', img: '',
    desc: `
> The CREATE TABLE statement is used to create a new table in a database.

-- Example

CREATE TABLE books (
  bookId int,
  bookName varchar(255)
);`
  },
  {
    lesson: 'DROP TABLE', img: '', desc: `
> The DROP TABLE statement is used to drop an existing table in a database.
DROP TABLE table_name;`
  },
  {
    lesson: 'INSERT INTO', img: '', desc: `
> The INSERT INTO statement is used to insert new records in a table.

-- Example

INSERT INTO books (id, title, author) 
VALUES
  (1, 'My First SQL Book', 'Mary Parker'),
  (2, 'My Second SQL Book', 'John Mayer'),
  (3, 'My First SQL Book', 'Cary Flint');`
  },
  {
    lesson: 'UPDATE', img: '', desc: `
> The UPDATE statement is used to modify the existing records in a table.

-- Example

UPDATE books
SET title = 'New title', author = 'New Author'
WHERE id = 1;`
  },
  {
    lesson: 'DELETE', img: '', desc: `
> The DELETE statement is used to delete existing records in a table.

-- Example

DELETE FROM books WHERE id = 1;`
  },
  {
    lesson: 'SELECT', img: '', desc: `
> The SELECT statement is used to select data from a database.

-- Example

SELECT * FROM books;`
  },
  {
    lesson: 'LIKE', img: '', desc: `
> The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

-- Example

SELECT * FROM books WHERE title LIKE 'p%';`
  },
  {
    lesson: 'COUNT, AVG and SUM', img: '', desc: `
> The COUNT() function returns the number of rows that matches a specified criterion.

> The AVG() function returns the average value of a numeric column.

> The SUM() function returns the total sum of a numeric column.

-- Example

SELECT COUNT(author) FROM books;

SELECT AVG(price) FROM books;

SELECT SUM(price) FROM books;`
  },
  {
    lesson: 'INNER JOIN', img: 'https://i.ibb.co/LC1nfgT/img-innerjoin.gif', desc: `
> The INNER JOIN keyword selects records that have matching values in both tables.

-- Example

SELECT books.title, reviews.reviewer_name
FROM books
INNER JOIN reviews ON books.id = reviews.book_id;`
  },
  {
    lesson: 'LEFT JOIN', img: 'https://i.ibb.co/ZLqjfQn/img-leftjoin.gif', desc: `
> The LEFT JOIN keyword returns all records from the left table (table1), and the matched records from the right table (table2).

-- Example

SELECT books.title, reviews.reviewer_name
FROM books
LEFT JOIN reviews ON books.id = reviews.book_id
ORDER BY books.title;`
  },
  
];

export default lessons;