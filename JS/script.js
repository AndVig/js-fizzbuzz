const element= document.getElementById('area');
for(let i=1; i<=100; i++){
    const square= document.createElement('div')
    square.className='d-flex blue square justify-content-center align-items-center m-3';
    square.innerHTML=i;
    element.append(square);

    if(i%3==0 && i%5==0){
        square.className='d-flex red square justify-content-center align-items-center m-3';
        square.innerHTML='fizzbuzz';
    }
    else if(i%3==0){
        square.className='d-flex green square justify-content-center align-items-center m-3';
        square.innerHTML='fizz';
    }
    else if(i%5==0){
        square.className='d-flex yellow square justify-content-center align-items-center m-3';
        square.innerHTML='buzz';
    }
    
}