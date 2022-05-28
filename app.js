const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    
    play: function() {
        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

        do {
            this.prevGuesses.push(this.getGuess());
            this.render();
        }
        while (this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum)
        return render();
    },

    getGuess: function(){
        let playerGuess;
     do {
        playerGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} `))
     }
      while (isNaN(playerGuess) || playerGuess < this.smallestNum || playerGuess > this.biggestNum)
      return playerGuess;
      },

    render: function() {
        let message;
        if (this.prevGuesses[this.prevGuesses.length-1] === this.secretNum){
            message = `Congrats! You guessed the number in ${this.prevGuesses.length}!`
        } else if (this.prevGuesses[this.prevGuesses.length-1] > this.secretNum) {
            message = `Your guess it too high! Previous guess: ${this.prevGuesses.join(' ,')}`
        }else if (this.prevGuesses[this.prevGuesses.length-1] < this.secretNum){
            message = `Your guess it too low! Previous guess: ${this.prevGuesses.join(', ')}`
        
    }
    alert(message);
  
    } 
}

