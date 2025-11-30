let btns = document.guerySelectorAll("button");

for (btn of btns){

    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
};

//SayHello, Say Name Function 