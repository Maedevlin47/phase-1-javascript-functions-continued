function saturdayFun(activity='roller-skate') {
    //console.log(`This Saturday, I want to ${activity}!`);
    console.log(activity);
    return `This Saturday, I want to ${activity}!`;
};

saturdayFun();

function mondayWork(plan='go to the office') {
    console.log(plan);
    return `This Monday, I will ${plan}.`;
};

mondayWork();

function* wrapAdjective(inner) {
    console.log(wrapAdjective);
};

function wrapAdjective(quality="special"){
    console.log(quality);
        return `("You are ${quality}")`
};