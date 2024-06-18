console.log("manav rachna")
let y=1
let z=0
function roll_dice()
{
let x=Number(Math.floor(Math.random(0,1)*6+1))
document.getElementById("dice_value").innerHTML=x

if(y%2==0)
    {
        console.log("Pizza")
     let num2 = Number(document.getElementById("p2_score").innerHTML)
     num2=num2+x
     document.getElementById("p2_score").innerHTML=num2
     y=1
     if(num2>=50)
        {
            z=1
        }
        
    }
else
{
    console.log("burger")
    let num1= Number(document.getElementById("p1_score").innerHTML)
    num1= num1+x
    document.getElementById('p1_score').innerHTML=num1
    y=y+1
    if(num1>=50)
        {
            z=1
        }
}
if(z==1)
    {
       num1 = Number(document.getElementById("p1_score").innerHTML)
       num2 = Number(document.getElementById("p2_score").innerHTML)
       if (num1>num2)
        {
        document.getElementById('result').innerHTML = 'Wow! you can eat Burger'
        document.getElementById('result').className="alert alert-success"
        document.getElementById('btn2').disabled = true
        
    }
    if(num2>num1)
        {
        document.getElementById('result').innerHTML = 'Yay! you can order Pizza'
        document.getElementById('result').className="alert alert-success"
        document.getElementById('btn2').disabled = true
        
    }
    addEventListener('click', function () {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }); 


}
}
