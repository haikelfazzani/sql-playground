const sqlquestions = [
  {
    lesson: 'question 1', img: '',
    desc: `
> Query the list of players names from players 
that either do not start with vowels 
or do not end with vowels. 
Your result cannot contain duplicates.

-- Answer

SELECT DISTINCT(player_name) 
  FROM players WHERE SUBSTR(player_name,1,1) 
  NOT IN ('a','e','i','o','u','A','E','I','O','U') 
  OR SUBSTR(player_name,-1,1) 
  NOT IN('a','e','i','o','u','A','E','I','O','U');`
  },
  {
    lesson: 'question 2', img: '',
    desc: `
> Who is the highest paid player?. 
return this fields -> player_name, salary and team_name

-- Answer

SELECT MAX(salary) player_name, teams.team_name 
  FROM players
  JOIN 
  teams ON players.team_id = teams.id;`
  },
];

export default sqlquestions;