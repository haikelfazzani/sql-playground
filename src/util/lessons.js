const lessons = [
  {
    lesson: 'Create table', img: '',
    desc: `
> The CREATE TABLE statement is used to create a new table in a database.

-- Example

CREATE TABLE teams (
  id serial,
  team_name varchar(100) NOT NULL,
  since int,
  country varchar(100) NOT NULL,
  PRIMARY KEY (id)
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

INSERT INTO teams (team_name, since, country) 
  VALUES
    ('Borussia Dortmund', 1909, 'Germany'),
    ('Barcelona Fc', 1892, 'Spain');
    
SELECT * FROM teams;`
  },
  {
    lesson: 'UPDATE', img: '', desc: `
> The UPDATE statement is used to modify the existing records in a table.

-- Example

UPDATE teams
SET team_name = 'Arsenal', since=1886
WHERE id = 1;

SELECT * FROM TEAMS;`
  },
  {
    lesson: 'DELETE', img: '', desc: `
> The DELETE statement is used to delete existing records in a table.

-- Example

DELETE FROM players WHERE id = 1;`
  },  
  {
    lesson: 'SELECT', img: '', desc: `
> The SELECT statement is used to select data from a database.

-- Example

SELECT * FROM players;

> The WHERE clause is used to filter records.

SELECT * FROM players WHERE id=2;`
  },
  {
    lesson: 'SELECT DISTINCT', img: '', desc: `
> The SELECT DISTINCT statement is used to return only distinct (different) values.

-- Example
SELECT team_id FROM players;
SELECT DISTINCT team_id FROM players;`
  },
  {
    lesson: 'LIKE', img: '', desc: `
> The LIKE operator is used in a WHERE clause 
to search for a specified pattern in a column.

-- Example

SELECT * FROM teams WHERE team_name LIKE 'a%';`
  },
  {
    lesson: 'BETWEEN', img: '', desc: `
> The BETWEEN operator selects values within a given range. 
The values can be numbers, text, or dates.

-- Example

SELECT * FROM players WHERE AGE BETWEEN 20 AND 30;`
  },
  {
    lesson: 'MIN and MAX', img: '', desc: `
> The MIN() function returns the smallest value of the selected column.

> The MAX() function returns the largest value of the selected column.

-- Example

SELECT MIN(age) AS Min_Age FROM players;
SELECT MAX(age) AS Max_Age FROM players;`
  },
  {
    lesson: 'COUNT, AVG and SUM', img: '', desc: `
> The COUNT() function returns the number of rows that matches a specified criterion.

> The AVG() function returns the average value of a numeric column.

> The SUM() function returns the total sum of a numeric column.

-- Example

SELECT COUNT(since) FROM teams;

SELECT AVG(since) FROM teams;

SELECT SUM(since) FROM teams;`
  },
  {
    lesson: 'GROUP BY', img: '', desc: `
> The GROUP BY statement groups rows that have the same values into summary rows, 
like "find the number of players in each team".

-- Example

SELECT COUNT(country), country FROM teams GROUP BY country;`
  },
  {
    lesson: 'HAVING', img: '', desc: `
> The HAVING clause was added to SQL because the WHERE keyword 
could not be used with aggregate functions..

-- Example

SELECT COUNT(id), country
FROM teams
GROUP BY country
HAVING COUNT(id) > 1;`
  },
  {
    lesson: 'INNER JOIN', img: 'https://i.ibb.co/LC1nfgT/img-innerjoin.gif', desc: `
> The INNER JOIN keyword selects records that have matching values in both tables.

-- Example

SELECT teams.team_name, players.player_name
FROM teams
INNER JOIN players ON teams.id = players.team_id;`
  },
  {
    lesson: 'LEFT JOIN', img: 'https://i.ibb.co/ZLqjfQn/img-leftjoin.gif', desc: `
> The LEFT JOIN keyword returns all records from the left table (table1), 
and the matched records from the right table (table2).

-- Example

SELECT teams.team_name, players.player_name
FROM teams
LEFT JOIN players ON teams.id = players.team_id
ORDER BY teams.team_name;`
  },
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

export default lessons;