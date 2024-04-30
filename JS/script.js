const element= document.getElementById('area');
for(let i=1; i<=100; i++){
    const square= document.createElement('div')
    square.className='blue square justify-content-center align-items-center m-3';
    square.innerHTML=i;
    element.append(square);
}