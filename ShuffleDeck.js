// ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    // suits: ['♥','♦','♠','♣'],


    const suits = ['♥','♦','♠','♣']
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    let newArray= [];
    for(const suit of suits){

        for(const rank of ranks){

            newArray.push(`${suit}${rank}`)  //  created a deck of card
        }
    }

    function shuffle(x){
        let duplicate = [...x];
        let temp;

        for(let i=0;i<duplicate.length;i++){
            let randomNumber = Math.floor(Math.random()*duplicate.length )
            temp = duplicate[randomNumber]
            duplicate[randomNumber]=duplicate[i]
            duplicate[i]=temp;
        }
        return duplicate;       
    }

    const result = shuffle(newArray)
    console.log(result)
    
    


   