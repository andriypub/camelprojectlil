// Define constants for maze size
const WIDTH = 10;
const HEIGHT = 10;

// Function to create a 2D array filled with zeros
function createArray(rows, cols) {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
}

// Function to generate a random maze using depth-first search algorithm
function generateMaze() {
    const maze = createArray(HEIGHT, WIDTH);
    const stack = [{ x: 0, y: 0 }];

    while (stack.length > 0) {
        const current = stack.pop();
        const { x, y } = current;
        maze[y][x] = 1;

        const neighbors = [
            { x: x + 1, y },
            { x: x - 1, y },
            { x, y: y + 1 },
            { x, y: y - 1 }
        ].filter(neighbor => neighbor.x >= 0 && neighbor.x < WIDTH && neighbor.y >= 0 && neighbor.y < HEIGHT && maze[neighbor.y][neighbor.x] === 0);

        if (neighbors.length > 0) {
            stack.push(current);
            const next = neighbors[Math.floor(Math.random() * neighbors.length)];
            maze[next.y][next.x] = 1;
            stack.push(next);
        }
    }

    return maze;
}

// Function to print the maze
function printMaze(maze) {
    maze.forEach(row => {
        console.log(row.map(cell => cell === 1 ? '█' : ' ').join(''));
    });
}

// Generate and print the maze
const maze = generateMaze();
printMaze(maze);
