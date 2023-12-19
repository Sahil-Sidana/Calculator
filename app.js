const buttons=document.querySelectorAll('button');

for(let button of buttons){

    button.addEventListener('click',(e)=>{
        const buttonText = e.target.innerText;
        console.log(buttonText);
    });
}
