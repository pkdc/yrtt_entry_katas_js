// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigLatin(str){
    // You code here!

    // split str into array of words
    // let str_arr_space = str.split(' ');
    // let str_space = str_arr_space.toString();
    // let str_arr = str_space.split(/\W/);
    // let str_arr = .split(/\W/);

    let str_arr = str.split(" ");
    console.log(str_arr);

    // (ignoring punctuation) use RegEx (Not solved!!!!!!!) (search for \W, take them out, and put them back?)
    // get the first letter of each words with substr
    // put it to the end of it with
    // add "ay" to the end with
    let re = /\w/;
    var pigLatinStrArr = str_arr.map(el => {
        if(re.test(el)) {
            return el.substr(1, el.length - 1) + el.substr(0,1) + "ay";
        }
        else {
            return el;
        }
    });

    console.log(pigLatinStrArr);
    // sticking them back tgt
    let pigLatinStr = "";
    for (const cur of pigLatinStrArr) {
        pigLatinStr += `${cur} `;
    }

    console.log(pigLatinStr);
    return pigLatinStr;
}

pigLatin('Hello, My name ^;^ is Dave!! Yo');
// module.exports = {
//     pigLatin
// };
