const lessonsTwo = [
  {
    lesson: 'FOREIGN KEY', img: '',
    desc: `
> The CREATE TABLE statement is used to create a new table in a database.

-- Example

CREATE TABLE countries (
  country_id INTEGER PRIMARY KEY,
  name varchar(100) NOT NULL,
  continental_id_fk int,
  FOREIGN KEY (continental_id_fk) REFERENCES continentals(id)
);

CREATE TABLE continentals (
  continental_id INTEGER PRIMARY KEY,
  name varchar(100) NOT NULL
);

INSERT INTO continentals (name) VALUES ('Africa'),('Europe');
INSERT INTO countries (name, continental_id_fk) VALUES ('Tunisia', 1),('England', 2);

SELECT * FROM continentals;
SELECT * FROM countries;`
  },
];

export default lessonsTwo;