export default function createInitTables () {
  return `CREATE TABLE books (
    id serial,
    title varchar(100) NOT NULL,
    author varchar(100) NOT NULL,
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
  
  INSERT INTO books (id, title, author) VALUES
    (1, 'My First SQL Book', 'Mary Parker'),
    (2, 'My Second SQL Book', 'John Mayer'),
    (3, 'My First SQL Book', 'Cary Flint');
  
  
  INSERT INTO reviews (id, book_id, reviewer_name, content) VALUES
    (1, 1, 'John Smith', 'My first review'),
    (2, 2, 'John Smith', 'My second review'),
    (3, 2, 'Alice Walker', 'Another review');
    
    select * from books b join reviews r on b.id = r.book_id;`
}