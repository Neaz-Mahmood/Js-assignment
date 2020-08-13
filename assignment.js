//1st function
function feetToMile(feet){
    if(feet< 0){
        console.log("Invalid Input");
    }
    else{
        var mile = feet/ 5280;
        var remainingFeet = feet % 5280;
        var mileNo = parseInt(mile);
        return mileNo , remainingFeet;
    }
}

//2nd function
function woodCalculator(chair, table, bed){
    var totalWood = chair + (table*3) + (bed*5);
    return totalWood;
}

//3rd function
function brickCalculator(floorNo){
    if(floorNo<=0){
        console.log("Invalid Input");
    }
    else if(floorNo <11){
        var feet = floorNo*15;
    }
    else if(floorNo<21){
        feet = ((floorNo-10)*12)+150;
    }
    else{
        feet= ((floorNo-20)*10)+270;
    }
    var brick = feet*1000;
    return brick;
}

//4th function
function tinyFriend(names){
    var tiny = names[0];
    for(var i=0; i<names.length;i++){
        if(names[i].length<tiny.length){
            tiny = names[i];
        }
    }
    return tiny;
}
