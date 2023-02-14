
    // let str_name = "Programming hero";

    // function evenOdd(str_length) {
       
    //     for (let i = 0; i < str_length.length; i++) {
    //       if (str_length[i].length % 2 != 0) {
    //         return odd;
    //       }
    //       else{
    //         return even;
    //       }
    //     }
       
    //   }
    // //   const myFriend = evenOdd(str_name);
    //   console.log(str_name.length);
    

    function evenOdd(str) {
        if (typeof (str) === "string") {
        if (str.length % 2 === 0) {
        return "even";
        } else {
        return "odd";
        }
        } else {
        return " Your entered input is not a string,\n Please input a String to check if it has a even numbered elements or not"
        }
        }

