const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.x = 0;
    this.y = 0;
  }

  print() {
    for (let i = 0; i < this.field.length; i++) {
      console.log(this.field[i].join(''));
    }
  }

  playGame() {
    let gameOver = false;

    while (!gameOver) {
      this.print();
      let input = prompt('Which way (l, r, u, d)?');

      switch (input) {
        case 'l':
          this.x -= 1;
          break;
        case 'r':
          this.x += 1;
          break;
        case 'u':
          this.y -=1;
          break;
        case 'd':
          this.y +=1;
          break;
        default:
          console.log('Please enter l, r, u, or d.')
      }

      try {
        let position = this.field[this.y][this.x];
        if (position == hat) {
          console.log('Congrats, you found your hat!');
          gameOver = true;
        } else if (position == hole) {
          console.log('Sorry, you fell down a hole');
          gameOver = true;
        } else {
          this.field[this.y][this.x] = pathCharacter;
        }
      } catch(e) {
        console.log('Sorry, you fell off the edge');
        gameOver = true;
      }
    }
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.playGame();