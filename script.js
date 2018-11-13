var signs=["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn" ];
var messages =["Explore new frontiers" , "Prioritize health and work." , "Have fun, and watch the trail ahead." ,
    "Healthy practices grow strength, stamina and endurance." , "Artistic efforts work in your favor.", "Beautify your surroundings.",
    "Produce, write and express your passion.", "Creative work pays well. Instill it with beauty." , "You're especially irresistible.",
    "Allow yourself more quiet time this month.", "Social activities benefit your career." ,
    "Focus on shared accounts through tomorrow."];
var pictures= ["img/aquarius.jpg", "img/pisces.jpg", "img/aries.jpg", "img/download.png",
    "img/gemini.jpg", "img/cancer.jpg", "img/leo.png", "img/gi.png", "img/libra.jpg",
    "img/scorpio.png", "img/sagittarius.jpg", "img/capricorn.jpg"];

function getSign(){
    var month= document.getElementById("month").value;
    var day= document.getElementById("date").value;
    var sign= determineSign(month,day);
    var name= document.getElementById("name").value;

    console.log(name);
    console.log(day);
    console.log(month);
    console.log(sign);
    console.log(messages[sign]);
    console.log(pictures[sign]);

    badDays(month,day);

    if(happyBday(month,day) == true){
       document.getElementById("bdayToday").innerHTML ="Happy Birthday!!!"
    }



    document.getElementById("pictures").src= pictures[sign];

    document.getElementById("finalMessage").innerHTML=("Hi " + name +
        ", your sign is " + signs[sign] + " and your horoscope is " + messages[sign]);
}

function determineSign(month,day){
    if(month==1 && day>=20 || month==2 && day<=18){
        return 0;
    }
    if(month==2 && day>=19 || month==3 && day<= 20){
        return 1;
    }
    if(month==3 && day>=21|| month==4 && day<= 20){
        return 2;
    }
    if(month==4 && day>=21 || month==5 && day<= 21){
        return 3;
    }
    if(month==5 && day>=22 || month==6 && day<= 21){
        return 4;
    }
    if(month==6 && day>=22 || month==7 && day<= 23){
        return 5;
    }
    if(month==7 && day>=24 || month==8 && day<= 23){
        return 6;
    }
    if(month==8 && day>=24 || month==9 && day<= 23){
        return 7;
    }
    if(month==9 && day>=24 || month==10 && day<= 23){
        return 8;
    }
    if(month==10 && day>=24 || month==11 && day<= 22){
        return 9;
    }
    if(month==11 && day>=23 || month==12 && day<= 22){
        return 10;
    }
    if(month==12 && day>=23 || month==1 && day<= 19){
        return 11;
    }
}

function badDays(month,day){
    if(month==2 && day>=30){
        alert("Invalid Date");
    }
    if(month==4 && day==31){
        alert("Invalid Date");

    }
    if(month==6 && day==31){
        alert("Invalid Date");

    }
    if(month==9 && day==31){
        alert("Invalid Date");

    }
    if(month==11 && day==31){
        alert("Invalid Date");

    }
}


function happyBday(month,day){
    var today= new Date();
    var thisDay = today.getDate();
    var thisMonth = today.getMonth();
    if( thisDay==day && thisMonth + 1 ==month ){
        return true;
    }else{
        return false;
    }
}
