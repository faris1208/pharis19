const box = document.getElementById('box');
const color = document.getElementById('color');
const buttons = document.getElementById('buttons');

function changeColor(){
    // const backgroundcolor = box.style.backgroundColor;
        // let box = color.value;
        box.style.backgroundColor = color.value;
}

buttons.addEventListener('click',changeColor);


// function getColor(){
//     let box = btn1.value
//     box.style.background = white;
// }

// btn1.addEventListener('click',getColor);

btn1.addEventListener('click', function onClick(event){
    const box = document.getElementById('box');
    const backgroundcolor = box.style.backgroundColor; 
    
    if(backgroundcolor =='antiquewhite'){
             box.style.backgroundColor = 'white';
                  
    }else{
           box.style.backgroundColor='white';
           
    }
})

btn2.addEventListener('click', function onClick(event){
    const box = document.getElementById('box');
    const backgroundcolor = box.style.backgroundColor; 
    
    if(backgroundcolor =='antiquewhite'){
             box.style.backgroundColor = 'black';
                  
    }else{
           box.style.backgroundColor='black';
           
    }
})
btn3.addEventListener('click', function onClick(event){
    const box = document.getElementById('box');
    const backgroundcolor = box.style.backgroundColor; 
    
    if(backgroundcolor =='antiquewhite'){
             box.style.backgroundColor = 'black';
                  
    }else{
           box.style.backgroundColor='red';
           
    }
})
btn4.addEventListener('click', function onClick(event){
    const box = document.getElementById('box');
    const backgroundcolor = box.style.backgroundColor; 
    
    if(backgroundcolor =='antiquewhite'){
             box.style.backgroundColor = 'black';
                  
    }else{
           box.style.backgroundColor='blue';
           
    }
})

btn5.addEventListener('click', function onClick(event){
    const box = document.getElementById('box');
    const backgroundcolor = box.style.backgroundColor; 
    
    if(backgroundcolor =='antiquewhite'){
             box.style.backgroundColor = 'black';
                  
    }else{
           box.style.backgroundColor='green';
           
    }
})

btn6.addEventListener('click', function onClick(event){
    const box = document.getElementById('box');
    const backgroundcolor = box.style.backgroundColor; 
    
    if(backgroundcolor =='antiquewhite'){
             box.style.backgroundColor = 'black';
                  
    }else{
           box.style.backgroundColor='purple';
           
    }
})

btn7.addEventListener('click', function onClick(event){
    const box = document.getElementById('box');
    const backgroundcolor = box.style.backgroundColor; 
    
    if(backgroundcolor =='antiquewhite'){
             box.style.backgroundColor = 'black';
                  
    }else{
           box.style.backgroundColor='gray';
           
    }
})

btn8.addEventListener('click', function onClick(event){
    const box = document.getElementById('box');
    const backgroundcolor = box.style.backgroundColor; 
    
    if(backgroundcolor =='antiquewhite'){
             box.style.backgroundColor = 'black';
                  
    }else{
           box.style.backgroundColor='orange';
           
    }
})

