let numberInput = document.getElementById("number")
let result = document.getElementById("result")
let randomNo = Math.floor(Math.random()*10)+1
let score = document.getElementById("score")
let totalScore=10

function clicked(){
    let enteredNo = numberInput.value
    if(randomNo==enteredNo)
    {
        alert(" You won....")
       result.textContent = "Your Won"
    }
    else if(totalScore==0)
    {
        score.textContent = "Your Disqualified"
    }
    else
    {
        totalScore=totalScore-1
        score.textContent = "score:"+totalScore
       result.textContent = "Your Wrong"
    }
}
