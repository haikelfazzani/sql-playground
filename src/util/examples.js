export default function createInitTables () {
  return `CREATE TABLE teams (
    id serial,
    team_name varchar(100) NOT NULL,
    since int,
    country varchar(100) NOT NULL,
    PRIMARY KEY (id)
  );

  CREATE TABLE players (
    id serial,
    team_id integer NOT NULL,
    player_name varchar(255),
    age int,
    PRIMARY KEY (id),
    FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
  );
  
  INSERT INTO teams (id, team_name, since, country) VALUES
    (1, 'Chelsea', 1905, 'England'),
    (2, 'Real madrid', 1902, 'Spain'),
    (3, 'Juventus', 1893, 'Italia'),
    (4, 'Ac Milan', 1899, 'Italia'),
    (5, 'Liverpool', 1892, 'England'),
    (6, 'Bayern Munich', 1900, 'Germany'),
    (7, 'Ajax Fc', 1900, 'Dutch');
  
  
  INSERT INTO players (id, team_id, player_name, age) VALUES
    (1, 4, 'Zlatan Ibrahimovic', 38),
    (2, 3, 'Christiano Ronaldo', 35),
    (3, 5, 'Mohamed Salah', 27),
    (4, 1, 'Olivier Giroud', 33),
    (5, 2, 'Karim Benzema', 32),
    (6, 3, 'Blaise Matuidi', 33),
    (7, 3, 'Adrien Rabiot', 25);
    
    select * from teams;
    select * from players;`
}