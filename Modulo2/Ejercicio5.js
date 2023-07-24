class SlothMachine {

    coins = 0;

    play() {
        const random1 = Math.random() < 0.5 ? true : false;
        const random2 = Math.random() < 0.5 ? true : false;
        const random3 = Math.random() < 0.5 ? true : false;

        if( random1 && random2 && random3){
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            this.coins++;
            console.log(`Good luck next time!!`);
        }
    }

}

const machine = new SlothMachine();

machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
