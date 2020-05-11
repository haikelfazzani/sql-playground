export default function createInitTables () {
  return `CREATE TABLE teams (
    id INTEGER PRIMARY KEY,
    team_name varchar(100) NOT NULL,
    since int,
    country varchar(100) NOT NULL
  );

  CREATE TABLE players (
    id INTEGER PRIMARY KEY,
    team_id integer NOT NULL,
    player_name varchar(255),
    age int,
    FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
  );
  
  INSERT INTO teams (team_name, since, country) VALUES
    ('Chelsea', 1905, 'England'),
    ('Real madrid', 1902, 'Spain'),
    ('Juventus', 1893, 'Italia'),
    ('Ac Milan', 1899, 'Italia'),
    ('Liverpool', 1892, 'England'),
    ('Bayern Munich', 1900, 'Germany'),
    ('Ajax Fc', 1900, 'Dutch'),
    ('West Ham United', 1895, 'England');
  
  
  INSERT INTO players (team_id, player_name, age) VALUES
    (4, 'Zlatan Ibrahimovic', 38),
    (3, 'Christiano Ronaldo', 35),
    (5, 'Mohamed Salah', 27),
    (1, 'Olivier Giroud', 33),
    (2, 'Karim Benzema', 32),
    (3, 'Blaise Matuidi', 33),
    (3, 'Adrien Rabiot', 25),
    (8, 'Angelo Ogbonna', 31);
    
    select * from teams;
    select * from players;`
}