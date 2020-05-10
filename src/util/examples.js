export default function createInitTables () {
  return `CREATE TABLE books (
    id serial,
    title varchar(100) NOT NULL,
    author varchar(100) NOT NULL,
    price int,
    PRIMARY KEY (id)
  );

  CREATE TABLE reviews (
    id serial,
    book_id integer NOT NULL,
    reviewer_name varchar(255),
    content varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
  );
  
  INSERT INTO books (id, title, author, price) VALUES
    (1, 'Java book', 'Sam doe', 150),
    (2, 'Python book', 'Mike doe', 80),
    (3, 'Golang book', 'Joe doe', 250),
    (4, 'Php book', 'Joe doe', 250),
    (5, 'Elixir book', 'Joe doe', 250);
  
  
  INSERT INTO reviews (id, book_id, reviewer_name, content) VALUES
    (1, 1, 'John Smith', 'My first review'),
    (2, 2, 'John Smith', 'My second review'),
    (3, 2, 'Alice Walker', 'Another review');
    
    select * from books;
    select * from reviews;`
}