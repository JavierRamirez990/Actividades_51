var numero;
numero = prompt ("¿cuantos numeros perfectos quieres?")

for( var i = 1; i <= 1500; i ++){
    b=0;
    for (var j = 1; j <= Math.floor(i/2); j++){ 
        b = b + parseInt(j);
    }
    if( b== i)
    console.log("el numero  es perfecto\n",i);
}

