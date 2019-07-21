var crystalTotal = 0
var wins = 0
var losses = 0 

function gameStart(){
    crystalTotal = 0
    $("#Core").text(crystalTotal)
    coreValue = Math.floor(Math.random() * (120 - 19)) + 19
    $("#powerNeeded").text(coreValue)
    
    crystalOneValue = Math.floor(Math.random() * (12 - 1)) + 1
    crystalTwoValue = Math.floor(Math.random() * (12 - 1)) + 1 
    crystalThreeValue = Math.floor(Math.random() * (12 - 1)) + 1
    crystalFourValue = Math.floor(Math.random() * (12 - 1)) + 1 
    
    $("#wins").text(wins)
    $("#losses").text(losses)
}

function winCondition(){
    $("#Core").text(crystalTotal)
    if (crystalTotal === coreValue){
        wins ++
        gameStart()
    }

    else if (crystalTotal > coreValue){
        losses ++
        gameStart()
    }
}
gameStart()

$("#crystalOne").on("click", function(){
    crystalTotal = crystalTotal + crystalOneValue
    winCondition()
})

$("#crystalTwo").on("click", function(){
    crystalTotal = crystalTotal + crystalTwoValue
    winCondition()
})

$("#crystalThree").on("click", function(){
    crystalTotal = crystalTotal + crystalThreeValue
    winCondition()
})

$("#crystalFour").on("click", function(){
    crystalTotal = crystalTotal + crystalFourValue
    winCondition()
})