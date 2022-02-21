function distanceFromHqInBlocks(end){
    let distanceInBlocks = Math.abs(42 - end)
    return distanceInBlocks;
}
function distanceFromHqInFeet(end){
    let distanceInFeet = Math.abs(42-end)* 264
    return distanceInFeet;
}
function distanceTravelledInFeet(num1,num2){
    let distanceTravelled = Math.abs(num1 - num2) * 264;
    return distanceTravelled;
}
function calculatesFarePrice(start, destination){
    let fair1 = Math.abs(start - destination) * 264;
    let price1 = 0;
    let price2 = ((Math.abs(start - destination) * 264)-400) * 0.02;
    let price3 = 25;
    let price4 = 'cannot travel that far';
    if (fair1<400)
        return price1
    else if (fair1>400 && fair1<2000)
        return price2
    else if (fair1>400 && fair1>2000 && fair1<2500)
        return price3
    else if (fair1>2500)
        return price4;
}
    



