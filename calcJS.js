/**
 * Created by Liza on 018 18.02.17.
 */
var field = document.getElementsByClassName("field")[0];
var elem = document.getElementsByTagName("button");
var num1="";
var num2="";
var sign;
var res;
var i = 0;
var j = 0;
var k = 0;
var numEq;
var signEq;
var p = 0;
var l = 0;

function elemInput()
{
    if (this.innerHTML == "/" || this.innerHTML == "+" || this.innerHTML == "-" || this.innerHTML == "*")
    {
      field.value = "";
        if (num1 == "" && res != null)
        {
            num1 = res;
            sign = this.innerHTML;
            i = 1;
            l = 0;
        }
        else
        {
            sign = this.innerHTML;
            i++;
            k = 0;
            l = 0;
        }
    }
    else if (this.innerHTML == "=")
    {
        num1 = Number(num1);
        num2 = Number(num2);

        console.log("num1   " + num1);
        console.log("num2   " + num2);
        console.log("res   " + res);

        if (sign == "/" && num2 == 0)
        {
            field.value = "Деление на ноль невозможно";
            res = null;
            clear();
            j = 1;
            p = 0;
        }
        else if (num1 !=0 || num2 != 0)
        {
            switch (sign){
                case "-":
                    res = num1 - num2;
                    break;
                case "+":
                    res = num1 + num2;
                    break;
                case "/":
                    res = num1 / num2;
                    break;
                case "*":
                    res = num1 * num2;
                    break;
            }
            field.value = res;
        }
        else if (res != null && num1 == 0 && num2 == 0 )
        {
            switch (signEq){
                case "-":
                    res = res - numEq;
                    break;
                case "+":
                    res = res + numEq;
                    break;
                case "/":
                    res = res / numEq;
                    break;
                case "*":
                    res = res * numEq;
                    break;
            }
            field.value = res;
        }
        else if (res == null || res == undefined || res == 0 || res == NaN)
        {
            field.value = 0;
            clear();
            j = 1;
            p = 0;
        }
        else
        {
            field.value = res;
            p = 0;
        }
        if (p == 0)
        {
            signEq = sign;
            numEq = num2;
            p = 1;
        }
        clear();
        i=0;
        if(field.value.indexOf("-") > -1)
        {
            l=1;
        }
        else
        {
            l=0;
        }
    }
    else if (this.innerHTML == "C")
    {
        clear();
        field.value = "";
        res = null;
        k = 0;
        p=0;
        i = 0;
        j = 0;
        l = 0;
        numEq=null;
        signEq="";
        num1="";
        num2="";
        sign="";
    }
    else
    {
        if (this.innerHTML.indexOf(".") > -1)
        {
            k++;
        }
        if(j == 1)
        {
            field.value = "";
            j = 0;
        }
        if (k < 2)
        {

            var line = this.innerHTML;
            if(field.value == "" && this.innerHTML == ".")
            {
                qwe("0" + line);
            }
            else
            {

                qwe(line);
            }
        }
        else if (k > 1)
        {
            k = 1;
        }
    }
    function clear()
    {
        num1 = String("");
        num2 = String("");
    }
    function qwe(line)
    {
        if (i == 0)
        {
            line = ewq(line, num1, 1);
            num1 += line;
            if (res != null && num1 == "-")
            {
                res = 0 - res;
                num1 = 0;
                console.log("qweqweqweqweqwe:" + res);
            }
            else
            {
                res = null;
            }
        }
        else
        {
            line = ewq(line, num2, 2);
            num2 += line;
        }
    }
    function ewq(line, number, cl)
    {
        if (line == elem[9].innerHTML)
        {
            if(l == 0)
            {

                l = 1;
                field.value = "-" + field.value;
                number = "-" + number;
                rty(cl);
                return line = "";

            }
            else
            {
                l = 0;
                field.value = field.value.substr(1);
                number = number.substr(1);
                rty(cl);
                return line = "";
            }
        }
        else
        {
            field.value += line;
            return line;
        }
        function rty(cl)
        {
            if(cl == 1)
            {
                num1 = number;
            }
            else
            {
                num2 = number;
            }
        }
    }
}
elem[0].onclick = elemInput;
elem[1].onclick = elemInput;
elem[2].onclick = elemInput;
elem[3].onclick = elemInput;
elem[4].onclick = elemInput;
elem[5].onclick = elemInput;
elem[6].onclick = elemInput;
elem[7].onclick = elemInput;
elem[8].onclick = elemInput;
elem[9].onclick = elemInput;
elem[10].onclick = elemInput;
elem[11].onclick = elemInput;
elem[12].onclick = elemInput;
elem[13].onclick = elemInput;
elem[14].onclick = elemInput;
elem[15].onclick = elemInput;
elem[16].onclick = elemInput;
elem[17].onclick = elemInput;