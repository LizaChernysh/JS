var elem = document.forms.test;
var ball;
var res = document.getElementsByTagName("button")[0];

res.onclick = function()
{
    ball = 0;
    if (elem.elements.question1[0].checked)
    {
        ball++;
    }
    if (elem.elements.question2[2].checked)
    {
        ball++;
    }
    if (elem.elements.question3[3].checked)
    {
        ball++;
    }
    if (elem.elements.question4[1].checked == true && elem.elements.question4[2].checked == true && elem.elements.question4[0].checked == false && elem.elements.question4[3].checked == false)
    {
        ball++;
    }
    if (elem.elements.question5[0].checked == true && elem.elements.question5[1].checked == true && elem.elements.question5[2].checked == false && elem.elements.question5[3].checked == false)
    {
        ball++;
    }
    alert("Ваша оценка " + ball + " из 5\n");
}