// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigLatin(str){
    // You code here!

    // split str into array of words
    let str_arr = str.split(" ");
    // console.log(str_arr);

    // (ignoring punctuation) use RegEx (search for \W, take them out, and put them back?)
    // get the first letter of each words with substr
    // put it to the end of it with
    // add "ay" to the end with

    const pigLatinStrArr = str_arr.map(el => {

        // if(re.test(el)) {    //wrong, the punctuation will be affected
        // let re = /[,!@#$%^&*()]/;   //wrong, the whole word would be ignored

        // if(re.test(el)) {
        // if(!re.test(el)) {  // no punctuation case
            // return el.substr(1, el.length - 1) + el.substr(0,1) + "ay";
        // }
        // else {}  // have punctuation case

        // capture groups with RegEx, assuming punctuations are always before (very rare, if any) or after a word
        // [2] is the word, [1] and [3] are the punctuation (if any), empty string is no punctuation
        // const re = /(\w+)([\[\],"|£!@#$%^~`¬&*<>?+=-_:;{}()]*)/
        const re = /(\W*)(\w+)(\W*)/;
        const wordPunct = el.match(re);
        // console.log(wordPunct);

        if (wordPunct[1] !== "" ) { // case punctuation marks before word
            return wordPunct[1] + wordPunct[2].substr(1, wordPunct[2].length - 1) + wordPunct[2].substr(0,1) + "ay";
        }
        else if (wordPunct[3] !== "" ) {    // case punctuation marks after word
            return wordPunct[2].substr(1, wordPunct[2].length - 1) + wordPunct[2].substr(0,1) + "ay" + wordPunct[3];
        }
        else if (wordPunct[1] !== "" && wordPunct[3] !== "") { // case punctuation marks before and after word
            wordPunct[1] + wordPunct[2].substr(1, wordPunct[2].length - 1) + wordPunct[2].substr(0,1) + "ay" + wordPunct[3];
        }
        else {  // case word with no surrounding punctuation marks
            return wordPunct[2].substr(1, wordPunct[2].length - 1) + wordPunct[2].substr(0,1) + "ay";
        }
    });
    // console.log(pigLatinStrArr);

    // sticking them back tgt
    let pigLatinStr = "";
    for (const cur of pigLatinStrArr) {
        pigLatinStr += `${cur} `;
    }

    // remove the last whitespace added before
    pigLatinStr = pigLatinStr.substr(0, pigLatinStr.length - 1);

    // console.log(pigLatinStr);
    return pigLatinStr;
}

// bug: an extra space at the end (solved)

// pigLatin('Pig latin is cool');
// pigLatin('This is my string');
// pigLatin('Pig latin is cool!!');
// pigLatin('Pig* latin $is cool!!');

module.exports = {
    pigLatin
};
