const game = {
    title: 'Guess the Number!',
    prevGuesses: [],
    smallestNum: null,
    biggestNum: null,
    // smallest & biggest set to null for bonus --> let user enter the range
    secretNum: null,

    play: function() {
      this.setRange()
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        do {
          this.prevGuesses.push(this.getGuess());
          this.resetRange();
          this.render();
        } while (
          this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum
        );
    },

    getGuess: function() {
      let guess;
      do {
        guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`));
      } while (
        isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum
        )
        return guess;
    },
    // this section held me up for SO LONG. couldn't figure out why it wasn't prompting me to guess a number after setting the range -> accidentally tried to call ${smallestNum} and ${biggestNum} without adding 'this.' 

    setRange: function() {
      do {
        this.smallestNum = parseInt(prompt(`Enter a number - this will be the low end of the range.`));
      } while (
        isNaN(this.smallestNum)
      )
      do {
        this.biggestNum = parseInt(prompt(`Enter a number that is ${this.smallestNum + 2} or more. This will be the high end of the range.`));
      } while (
        isNaN(this.biggestNum) || this.biggestNum < this.smallestNum + 2
      );
    },

    resetRange: function() {
      if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
        this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1];
      } else {
        this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
      }
    },

    render: function() {
      let message;
      if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
        message = `Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? "guesses" : "guess"}!`;
        // so amazed by / scared of ternary operators. this is so wacky
      } else {
        message = `Your guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? "high" : "low"}\nPrevious guesses: ${this.prevGuesses.join(", ")}`;
      }
      alert(message);
    },

  };


game.play();
