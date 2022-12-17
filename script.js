const attempt = document.getElementById("attempt");
  let a = 10;
const message = document.getElementById("message");
const num = Math.random();

 const number = Math.floor((num * 1000000) % 100);
//  message.innerText = number;
function CheckTheNum() {
  const inp = document.getElementById("inp").value;
   if(a == 0){
    message.innerText = 'You Loss the Game please try again';
       return;
   }
   else if(inp == number){
        message.innerText = `You Won the Game in ${10-a} attempt`;
        return;
    }
    else if(inp > number){
        message.innerText = 'Please enter lower Number';
    }
    else{
        message.innerText = 'Please enter higher Number';
    }
   a--;
    attempt.innerText=a;
}