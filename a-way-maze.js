// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it. 
// There are more than one possible exit from the Maze. 
// Write a recursive function that will help you find a possible exit 
// though the maze

// You can use the following mazes to test your program.



let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
// The Maze is represented as a NM matrix (in the above case, 
// a 3X3 or a 5X7 array). The starting point is the top left corner 
// and the exit is indicated by e. For simplicity purpose, use the 
// bottom right corner of the maze as the exit. You can't go outside 
// the boundaries of the maze. The maze has passages that are blocked 
// and you can't go through them. These blocked passages are indicated 
// by ``. Passing through a blocked cell as well as passing though a 
// cell that you have already passed before are forbidden.

// For the above maze, a possible exit can be RRDDLLDDRRRRRR

// Questions:
// What is the input to the program? a maze, possible starting point
// What is the output of the program? string directions to completeing the maze
// What is the input to each recursive call? maze, current position
// What is the output of each recursive call? direction, function(new position)

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

const mazeSolution = function(maze, row=0, col=0) {
  const currentPosition = maze[row][col];
  const up = row - 1;
  const down = row + 1;
  const left = col - 1;
  const right = col + 1;

  if (currentPosition === 'e') {
    return '! You solved the maze!';
  }

  if (up >= 0 && maze[up][col] === ' ') {
    maze[up].splice(col, 1, 'X');
    return 'U' + mazeSolution(maze, [up], [col]);
  } else
  if (down <= maze.length && maze[down][col] === ' ') {
    maze[down].splice(col, 1, 'X');
    return 'D' + mazeSolution(maze, [down], [col]);
  } else
  if (right <= maze[row].length && maze[row][right] === ' ') {
    maze[row].splice(right, 1, 'X');
    return 'R' + mazeSolution(maze, [row], [right]);
  }else 
  if (left >= 0 && maze[row][left] === ' ') {
    maze[row].splice(left, 1, 'X');
    return 'L' + mazeSolution(maze, [row], [left]);
  }

};

console.log(mazeSolution(mySmallMaze));