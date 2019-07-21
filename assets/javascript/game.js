var crystalTotal = 0
var wins = 0
var losses = 0 

function gameStart(){
    crystalTotal = 0
    $("#Core").text(crystalTotal)
    coreValue = Math.floor(Math.random() * (120 - 19)) + 19
    $("#powerNeeded").text(coreValue)
    console.log("Core " + coreValue)
    crystalOneValue = Math.floor(Math.random() * (12 - 1)) + 1
    console.log("One " + crystalOneValue)
    crystalTwoValue = Math.floor(Math.random() * (12 - 1)) + 1 
    console.log("Two " + crystalTwoValue)
    crystalThreeValue = Math.floor(Math.random() * (12 - 1)) + 1
    console.log("Three " + crystalThreeValue)
    crystalFourValue = Math.floor(Math.random() * (12 - 1)) + 1 
    console.log("Four " + crystalFourValue) 
    $("#wins").text(wins)
    $("#losses").text(losses)
}

function winCondition(){
    $("#Core").text(crystalTotal)
    if (crystalTotal === coreValue){
        wins ++
        console.log("wins " + wins)
        gameStart()
    }

    else if (crystalTotal > coreValue){
        losses ++
        console.log("Losses " + losses)
        gameStart()
    }
}
gameStart()

$("#crystalOne").on("click", function(){
    crystalTotal = crystalTotal + crystalOneValue
    winCondition()
    console.log("core " + crystalTotal)
})

$("#crystalTwo").on("click", function(){
    crystalTotal = crystalTotal + crystalTwoValue
    winCondition()
    console.log("core " + crystalTotal)
})

$("#crystalThree").on("click", function(){
    crystalTotal = crystalTotal + crystalThreeValue
    winCondition()
    console.log("core " + crystalTotal)
})

$("#crystalFour").on("click", function(){
    crystalTotal = crystalTotal + crystalFourValue
    winCondition()
    console.log("core " + crystalTotal)
})