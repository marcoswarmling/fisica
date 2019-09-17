
// calculo

function convertTemp(direction){
    var Fobj = document.convert.ftemp, Cobj = document.convert.ctemp, Kobj = document.convert.ktemp;
   
    if (direction == "fire"){
        Cobj.value = Math.round((parseInt(Fobj.value-32))*(5/9));
        Kobj.value = Math.round((parseInt((Fobj.value - 32))*(5/9))+ 273);
    }
    else if (direction == "kelv"){
        Cobj.value = Math.round((parseInt(Kobj.value - 273) ));
        Fobj.value = Math.round((parseInt(Kobj.value - 273)*(9/5) + 32));
    }
     if (direction == "grau") {
        Fobj.value = Math.round((parseInt((Cobj.value) * 9) /5) + 32);
        Kobj.value = Math.round((parseInt(Cobj.value) + 273));
    }
    if(Cobj.value < -273 || Cobj.value == -273){
        alert("esta temperatura é abaixo do 0 absoluto. porem se existisse seria:");
        Fobj.value == 0;
        Kobj.value == 0;
    }else  if(Fobj.value <-459 || Fobj.value == -459 ){
        alert("esta temperatura é abaixo do 0 absoluto. porem se existisse seria:");
        Cobj.value = math.round(0) ;
        Kobj.value == 0;
    }else if(Kobj.value < 0 || Kobj.value == 0){
        alert("esta temperatura é abaixo do 0 absoluto. porem se existisse seria:");
        Fobj.value == 0;
        Cobj.value == 0;
    }
 }
 
