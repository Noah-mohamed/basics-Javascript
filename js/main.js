//  js ( Question 1) //
var inPut=document.getElementById("inPut");
var printBtn=document.getElementById("printBtn");
var printOutput=document.getElementById("printOutput");

printBtn.onclick=function(){

    if(inPut.value!=""){
    printOutput.innerHTML= "<hr>" + inPut.value + "<hr>";
    inPut.value="";
    }
    else{
        printOutput.innerHTML= "<hr> <h5 class='text-danger'> please enter something to print </h5> <hr>"
    }

}
//  js ( Question 2) //

var inPut2=document.getElementById("inPut2");
var printBtn2=document.getElementById("printBtn2");
var printOutput2=document.getElementById("printOutput2");

printBtn2.onclick=function(){

    if(inPut2.value == ""){
        printOutput2.innerHTML= "<hr> <h5 class='text-danger'> please enter number </h5> <hr>"
    }
    else if (inPut2.value%3 > 0){
        printOutput2.innerHTML= "<hr> <h5 class='text-danger'> NO </h5> <hr>";
        inPut2.value="";
    }
    else if (inPut2.value % 3 == 0)
    { printOutput2.innerHTML= "<hr> YES <hr>";   inPut2.value="";}

}

//  js ( Question 3) //

var inPut3i1 =document.getElementById("inPut3i1");
var inPut3i2 =document.getElementById("inPut3i2");
var printBtn3=document.getElementById("printBtn3");
var printOutput3=document.getElementById("printOutput3");
var compairvalue=document.getElementById("compairvalue");


printBtn3.onclick=function(){

    if(inPut3i1.value == "" || inPut3i2.value == ""){
        printOutput3.innerHTML= " <h6 class='text-danger'> please enter numbers </h6>"
    }
    else if (Number(inPut3i1.value) > Number(inPut3i2.value)){
        compairvalue.innerHTML= ">";
        inPut3i1.style.backgroundColor="rgba(0,255,0,0.1)";
        inPut3i2.style.backgroundColor="#fff";
        printOutput3.innerHTML= inPut3i1.value  
    }
    else if (Number(inPut3i1.value) < Number(inPut3i2.value)){
        compairvalue.innerHTML= "<";
        inPut3i2.style.backgroundColor="rgba(0,255,0,0.1)"
        inPut3i1.style.backgroundColor="#fff"
        printOutput3.innerHTML= inPut3i2.value  
    }
    else if (inPut3i1.value == inPut3i2.value){
        compairvalue.innerHTML= "=";
        inPut3i2.style.backgroundColor="rgba(255,255,0,0.1)"
        inPut3i1.style.backgroundColor="rgba(255,255,0,0.1)"
        printOutput3.innerHTML= "They equal each others"
    }
}

//  js ( Question 4) //

var inPut4=document.getElementById("inPut4");
var printBtn4=document.getElementById("printBtn4");
var printOutput4=document.getElementById("printOutput4");

printBtn4.onclick=function(){

    if(inPut4.value == ""){
        printOutput4.innerHTML= "<h5 class='text-danger'> please enter number </h5>"
    }
    else if (Number(inPut4.value) < 0){
        printOutput4.innerHTML= " <h5 class='text-danger'> Negatine </h5>";
       
    }
    else if (Number(inPut4.value) >= 0)
    { printOutput4.innerHTML= " positive";  }

}

//  js ( Question 5) //


var inPut5i1 =document.getElementById("inPut5i1");
var inPut5i2 =document.getElementById("inPut5i2");
var inPut5i3 =document.getElementById("inPut5i3");
var printBtn5=document.getElementById("printBtn5");
var max=document.getElementById("max");
var min=document.getElementById("min");
var printOutput5=document.getElementById("printOutput5");

printBtn5.onclick=function(){

    if(inPut5i1.value == "" || inPut5i2.value == "" || inPut5i3.value == "" ){
        printOutput5.innerHTML= " <h6 class='text-danger'> please enter numbers </h6>"
    }
    else if (Number(inPut5i1.value) >= Number(inPut5i2.value) &&  Number(inPut5i1.value) >= Number(inPut5i3.value)){

            if(  Number(inPut5i2.value) >= Number(inPut5i3.value)){
        printOutput5.innerHTML= ""
        inPut5i1.style.backgroundColor="rgba(0,255,0,0.1)";
        inPut5i3.style.backgroundColor="rgba(255,0,0,0.1)";
        inPut5i2.style.backgroundColor="#fff";
        max.innerHTML=inPut5i1.value;
        min.innerHTML=inPut5i3.value;}
        else {
            printOutput5.innerHTML= ""
        inPut5i1.style.backgroundColor="rgba(0,255,0,0.1)";
        inPut5i2.style.backgroundColor="rgba(255,0,0,0.1)";
        inPut5i3.style.backgroundColor="#fff";
        max.innerHTML=inPut5i1.value;
        min.innerHTML=inPut5i2.value;
        }
    }
    else if (Number(inPut5i2.value) >= Number(inPut5i1.value) &&  Number(inPut5i2.value) >= Number(inPut5i3.value)){

        if(  Number(inPut5i1.value) >= Number(inPut5i3.value)){
            printOutput5.innerHTML= ""
            inPut5i2.style.backgroundColor="rgba(0,255,0,0.1)";
            inPut5i3.style.backgroundColor="rgba(255,0,0,0.1)";
            inPut5i1.style.backgroundColor="#fff";
            max.innerHTML=inPut5i2.value;
            min.innerHTML=inPut5i3.value;}
            else {
                printOutput5.innerHTML= ""
            inPut5i2.style.backgroundColor="rgba(0,255,0,0.1)";
            inPut5i1.style.backgroundColor="rgba(255,0,0,0.1)";
            inPut5i3.style.backgroundColor="#fff";
            max.innerHTML=inPut5i2.value;
            min.innerHTML=inPut5i1.value;
            }
    }
    else if (Number(inPut5i3.value) >= Number(inPut5i1.value) &&  Number(inPut5i3.value) >= Number(inPut5i2.value)){
        if(  Number(inPut5i1.value) >= Number(inPut5i2.value)){
            printOutput5.innerHTML= ""
            inPut5i3.style.backgroundColor="rgba(0,255,0,0.1)";
            inPut5i2.style.backgroundColor="rgba(255,0,0,0.1)";
            inPut5i1.style.backgroundColor="#fff";
            max.innerHTML=inPut5i3.value;
            min.innerHTML=inPut5i2.value;}
            else {
                printOutput5.innerHTML= ""
            inPut5i3.style.backgroundColor="rgba(0,255,0,0.1)";
            inPut5i1.style.backgroundColor="rgba(255,0,0,0.1)";
            inPut5i2.style.backgroundColor="#fff";
            max.innerHTML=inPut5i3.value;
            min.innerHTML=inPut5i1.value;
            }
    }

  
}

//  js ( Question 6) //
var inPut6=document.getElementById("inPut6");
var printBtn6=document.getElementById("printBtn6");
var printOutput6=document.getElementById("printOutput6");

printBtn6.onclick=function(){

    if(inPut6.value == ""){
        printOutput6.innerHTML= "<h5 class='text-danger'> please enter number </h5>"
    }
    else if (Number(inPut6.value) %2 == 0){
        printOutput6.innerHTML= " <h5 class='text-info'> ( even ) </h5>";
      
    }
    else if (Number(inPut6.value)%2  >= 0)
    { printOutput6.innerHTML= "<h5 class='text-warning'> ( odd ) </h5>"   ;}

}

//  js ( Question 7) //
var inPut7=document.getElementById("inPut7");
var printBtn7=document.getElementById("printBtn7");
var printOutput7=document.getElementById("printOutput7");

printBtn7.onclick=function(){

    if(inPut7.value == ""){
        printOutput7.innerHTML= "<h5 class='text-danger'> please enter char </h5>"
    }
    else if (inPut7.value == "a" || inPut7.value == "e" || inPut7.value == "I" || inPut7.value == "o" || inPut7.value == "u"){
        printOutput7.innerHTML= " <h5 class='text-info'> ( vowel ) </h5>";
      
    }
  
    else
    { printOutput7.innerHTML= "<h5 class='text-warning'> ( consonant ) </h5>"   ;}

}

//  js ( Question 8) //
var inPut8=document.getElementById("inPut8");
var printBtn8=document.getElementById("printBtn8");
var printOutput8=document.getElementById("printOutput8");

printBtn8.onclick=function(){
 var temp=""
    for(i=1; i<Number(inPut8.value);i++){
        temp+= i + " , " 
    
    }
    temp+= i

    printOutput8.innerHTML= "<hr>"+ temp + "<hr>"

}

//  js ( Question 9) //

// var inPut9=document.getElementById("inPut9");
// var printBtn9=document.getElementById("printBtn9");
// var printOutput9=document.getElementById("printOutput9");

// printBtn9.onclick=function(){
//  var temp2=""
//     for(i=0; i<13 ; i++ ) {
//       temp2+=  " " + inPut9.value * i
//     }
 
   
//     printOutput9.innerHTML= "<hr>"+ temp2 + "<hr>"

// }


// js ( Question 9) 

var inPut9=document.getElementById("inPut9");
var printBtn9=document.getElementById("printBtn9");
var printOutput9=document.getElementById("printOutput9");

printBtn9.onclick=function(){
 var temp2=""
    for(i=0; i<13 ; i++ ) {
      temp2+=  " <tr><td>"+i+"</td><td>"+ i* + inPut9.value +"</td></tr>" ;
    }
    printOutput9.innerHTML=  temp2 
}
// js ( Question 10) 
var inPut10=document.getElementById("inPut10");
var printBtn10=document.getElementById("printBtn10");
var printOutput10=document.getElementById("printOutput10");

printBtn10.onclick=function(){
 var temp=""
    for(i=1; i<inPut10.value ;i++){
        if (i%2==0) {
            temp+= i + "  " 
        }
       
        }
    
    printOutput10.innerHTML= "<hr>"+ temp + "<hr>"

}

// js ( Question 11) 
var power=document.getElementById("power");
var number=document.getElementById("number");
var powerBtn=document.getElementById("powerBtn11");
var powerPrintOutput=document.getElementById("powerPrintOutput11");

powerBtn.onclick=function(){
    if(number.value !== "" && number.value !== "")
    {
    var powerResult = 1 ;
    for (var i=1 ; i<=power.value ; i++ ){
        
        powerResult*= number.value;
    }
    
    powerPrintOutput.innerHTML=  powerResult
}
}
// js ( Question 12) 
var inPut12=document.getElementById("inPut12");
var printBtn12=document.getElementById("printBtn12");
var printOutput12=document.getElementById("printOutput12");
var avgprintOutput12=document.getElementById("avgprintOutput12");
var array =[]

function addtoarray(){
    if(array.length<=9 && inPut12.value !=="" ) {
          
           array.push(inPut12.value)
           printOutput12.innerHTML=  "Your Numbers Now is ( " + array.join("  |  ") +" )"
           switch(array.length){
               case 1 : printBtn12.innerHTML="Enter another 9 numbers"
               break;
               case 2 : printBtn12.innerHTML="Enter another 8 numbers"
               break;
               case 3 : printBtn12.innerHTML="Enter another 7 numbers"
               break;
               case 4 : printBtn12.innerHTML="Enter another 6 numbers"
               break;
               case 5 : printBtn12.innerHTML="Enter another 5 numbers"
               break;
               case 6 : printBtn12.innerHTML="Enter another 4 numbers"
               break;
               case 7 : printBtn12.innerHTML="Enter another 3 numbers"
               break;
               case 8 : printBtn12.innerHTML="Enter another 2 numbers"
               break;
               case 9 : printBtn12.innerHTML="Enter another 1 number"
               break;
               case 10 : printBtn12.innerHTML="Done"
               break;
       }
   }

}

   var sum = 0 
   function avgcalc() {
    if(array.length==10){
       for (var i=0 ; i<10 ; i++){
           sum += Number(array[i])
          }
       var avg = sum/10

       console.log(sum)
       avgprintOutput12.innerHTML="<h4 class='text-muted'> The Avarage is = <span class='text-warning'>" +avg+ "</span></h4> <button onclick='reset()'  class='btn btn-outline-danger mt-2 btn-sm '>reset</button>"
       sum=0

       }}

       function reset(){
           avg=0
           array=[]
           printOutput12.innerHTML=""
           printBtn12.innerHTML="add"
           avgprintOutput12.innerHTML=""

       }

printBtn12.onclick=function(){
    addtoarray()
    avgcalc()

}

// js ( Question 13)
var inPut13=document.getElementById("inPut13");
var printBtn13=document.getElementById("printBtn13");
var printOutput13=document.getElementById("printOutput13");
var avgprintOutput13=document.getElementById("avgprintOutput13");


printBtn13.onclick=function(){
var inputArray= inPut13.value.split(",")
printOutput13.innerHTML = inputArray.reverse()
}

// js ( Question 14)

function printFn() {
    var input = document.getElementById("inPut14").value;
    document.getElementById("printOutput14").innerHTML= input;
}

document.getElementById("printBtn14").onclick = function(){
    printFn()
};


//  js ( Question 15) //


var inPut15i1 =document.getElementById("inPut15i1");
var inPut15i2 =document.getElementById("inPut15i2");
var inPut15i3 =document.getElementById("inPut15i3");
var printBtn15=document.getElementById("printBtn15");

var printOutput15=document.getElementById("printOutput15");

printBtn15.onclick=function(){
    var theSum = Number(inPut15i1.value) + Number(inPut15i2.value) + Number(inPut15i3.value);
    var avrage = theSum/3;
    printOutput15.innerHTML= avrage;
}

//  js ( Question 17) //


var inPut17=document.getElementById("inPut17");
var printBtn17=document.getElementById("printBtn17");
var printOutput17=document.getElementById("printOutput17");
var avgprintOutput17=document.getElementById("avgprintOutput17");

function arraySumFn() {
    var inputArray= inPut17.value.split(",");
    var arraySum = 0;

    for( var i=0 ; i<inputArray.length ; i++){
        arraySum+=Number(inputArray[i])
    }

printOutput17.innerHTML = arraySum
}


printBtn17.onclick=function(){
arraySumFn()
}


//  js ( Question 19) //
var inPut19=document.getElementById("inPut19");
var printBtn19=document.getElementById("printBtn19");
var printOutput19=document.getElementById("printOutput19");
printBtn19.onclick=function(){
var stringArray = inPut19.value.split("")
var counter=0
for(var i=0 ; i<stringArray.length ; i++){
    if (stringArray[i] =="a" || stringArray[i] =="e" ||stringArray[i] =="o" ||stringArray[i] =="I" || stringArray[i] =="u" ){
        counter++
    }
}
printOutput19.innerHTML= counter;
}



//  js ( Question 20) //
var inPut20=document.getElementById("inPut20");
var printBtn20=document.getElementById("printBtn20");
var printOutput20=document.getElementById("printOutput20");
printBtn20.onclick=function(){
var stringArray = inPut20.value.split("")
console.log(stringArray)
for(var i=0 ; i<stringArray.length ; i++){
    console.log(i)

    if (stringArray[i] =="a" || stringArray[i] =="e" ||stringArray[i] =="o" ||stringArray[i] =="I" || stringArray[i] =="u" ){
        stringArray[i]=""
    }
}
printOutput20.innerHTML= stringArray.join("");
}