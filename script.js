let btn=document.getElementById('btn');

let inputDate=document.getElementById('input-date');

let result=document.getElementById('result');

result.textContent='Enter your Date of Birth to Calculate your age' ;

inputDate.max= new Date().toISOString().split("T")[0];


function calculate(){

    let birthDate=new Date(inputDate.value);

    let d1=birthDate.getDate();
    let m1=birthDate.getMonth();
    let y1=birthDate.getFullYear();
 
    let today=new Date();

    let d2=today.getDate();
    let m2=today.getMonth();
    let y2=today.getFullYear();

    let d3,m3,y3;

    y3=y2-y1;

    if(m1<m2){
        m3=m2-m1;
    }else{
        y3--;

        m3=12+(m2-m1);
    }

    if(d1<d2){
        d3=d2-d1;
    }
    else{
        m3--;

        d3=getDaysInMonth(y1,m1) + d2-d1;
    }

    if(m3<0){
        m3=11;     
        y3--;
    }

    if(m3>=12){
        y3++;
        m3 -=12;
    }
    
    if(y1===y2 && m1===m2 &&  d1===d2){
        m3=y3=0;
        d3=1;
    }
    // console.log(y3,m3,d3);

    result.textContent=`your age is ${y3} years  ${m3} months and ${d3} days` ;
}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}

