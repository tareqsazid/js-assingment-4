// function gemsToDiamond (firstFriendsGems, secondFriendsGems, thirdFriendsGems){
//     const firstFriendsGemsPower = 21;
//     const secondFriendsGemsPower = 32;
//     const thirdFriendsGemsPower = 43;

//     const totalFirstFriendsDiamond = firstFriendsGemsPower * firstFriendsGems;
//     const totalSecondFriendsDiamond = secondFriendsGemsPower * secondFriendsGems;
//     const totalThirdFriendsDiamond = thirdFriendsGemsPower * thirdFriendsGems;

//     const totalDiamond = totalFirstFriendsDiamond + totalSecondFriendsDiamond + totalThirdFriendsDiamond;
  

//     return totalDiamond;
// }

// const totalDiamond = gemsToDiamond(1, 1, 1)
// console.log(totalDiamond)

function gemsToDiamond(one, sec, third) {
    if (typeof (one) === "number"&& typeof (sec) === "number"&&typeof (third) === "number") {
    let a = one * 21;
    let b = sec * 32;
    let c = third * 43;
    let total = a + b + c;
    if (total >= 2000)
    return total - 2000;
    else
    return total;
    }
    else {
    return "Your inputs are not number, Please input a number.";
    }
    }