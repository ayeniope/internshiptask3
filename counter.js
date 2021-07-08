let countervalue=0;
lowercount.addEventListener('click',function (event) {
    if(countervalue>=1){
        countervalue -= 1;
        counter.innerHTML = countervalue;
    }
});
addcount.addEventListener('click',function (event) { 
    if(countervalue<50){
        countervalue += 1;
        counter.innerHTML = countervalue;
    }
    });
