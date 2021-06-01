function send(){
    number1=document.getElementById("n1").value;
    number2=document.getElementById("n2").value;
    actualans= parseInt(number1) * parseInt(number2);
    question_number="<h4>" + number1 + "X" + number2 + "</h4>";
    input="<br>ANS :<input type'text' id='input_check'>";
    check="<br><br><button class='btn btn-success' onclick='check()'>CHECK</button>";
    row= question_number + input + check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}
