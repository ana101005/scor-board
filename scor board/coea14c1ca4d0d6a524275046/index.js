let Score1=document.getElementById("score1")
let Score2=document.getElementById("score2")
Score1.textContent=0
Score2.textContent=0
let Sc1=0
let Sc2=0

function btn11(){
    Sc1+=1
    Score1.textContent=Sc1
}
function btn12()
{
    Sc2+=1
    Score2.textContent=Sc2
}
function btn21(){
    Sc1+=2
    Score1.textContent=Sc1
}
function btn22()
{
    Sc2+=2
    Score2.textContent=Sc2
}
function btn31(){
    Sc1+=3
    Score1.textContent=Sc1
}
function btn32()
{
    Sc2+=3
    Score2.textContent=Sc2
}
