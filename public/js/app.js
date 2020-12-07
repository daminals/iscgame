// 97 -122

function lowerPassword(password) {
    var p_list = password.split("");
    var empty_p_list = [];
    for (char_p = 0; char_p < (p_list.length); char_p++){
        for (i=97; i<123; i++){
            if (String.fromCharCode(i) == p_list[char_p]){
                empty_p_list[char_p] = String.fromCharCode(i);
                console.log(empty_p_list)
            }
        }
    }
    var guessed_password = empty_p_list.join("");
    return guessed_password;
}

function luPassword(password) {
    var p_list = password.split("");
    var empty_p_list = [];
    for (char_p = 0; char_p < (p_list.length); char_p++){
        for (i=65; i<123; i++){
            if (i == 91){i=97}
            if (String.fromCharCode(i) == p_list[char_p]){
                empty_p_list[char_p] = String.fromCharCode(i);
                console.log(empty_p_list)
            }
        }
    }
    var guessed_password = empty_p_list.join("");
    return guessed_password;
}

function lusPassword(password) {
    var p_list = password.split("");
    var empty_p_list = [];
    for (char_p = 0; char_p < (p_list.length); char_p++){
        for (i=32; i<126; i++){
            if (String.fromCharCode(i) == p_list[char_p]){
                empty_p_list[char_p] = String.fromCharCode(i);
                console.log(empty_p_list)
            }
        }
    }
    var guessed_password = empty_p_list.join("");
    return guessed_password;
}

console.log(lusPassword("Zepa$Sword"))

