// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigLatin(str){
    // You code here!

    // split str into array of words
    // let str_arr_space = str.split(' ');
    // let str_space = str_arr_space.toString();
    // let str_arr = str_space.split(/\W/);

    // let str_arr = str.split(/\W/);

    let str_arr = str.split(" ");
    // console.log(str_arr);

    // (ignoring punctuation) use RegEx (Not solved!!!!!!!) (search for \W, take them out, and put them back?)
    // get the first letter of each words with substr
    // put it to the end of it with
    // add "ay" to the end with
    // let re = /\w/;
    var pigLatinStrArr = str_arr.map(el => {
        // console.log(el);
        // if(re.test(el)) {    //wrong, the punctuation will be affected
    // let re = /[,!@#$%^&*()]/;   //wrong, the whole word would be ignored

        // if(re.test(el)) {
        // if(!re.test(el)) {  // no punctuation case

            // return el.substr(1, el.length - 1) + el.substr(0,1) + "ay";
        // }
        // else {  // have punctuation case
            // search for the punctuation .search?
            // assume there is only one group of punctuations at the end of the string
            // let p = el.search(re);
            // console.log(p);
            // let obj = re.exec(el);
            // console.log(`exclam at ${obj[0]} and ${obj.index}`);

            // capture groups with RegEx, assuming punctuations are always before or after a word
            // [1] is the word, [2] is the punctuation if any
            // const re = /(\w+)([\[\],"|£!@#$%^~`¬&*<>?+=-_:;{}()]*)/
            const re = /(\W*)(\w+)(\W*)/;
            let wordPunct = el.match(re);
            // console.log(wordPunct);
            // console.log(wordPunct[3]);
            if (wordPunct[1] !== "" ) {
                return wordPunct[1] + [2].substr(1, wordPunct[2].length - 1) + wordPunct[2].substr(0,1) + "ay";
            }
            else if (wordPunct[3] !== "" ) {
                return wordPunct[2].substr(1, wordPunct[2].length - 1) + wordPunct[2].substr(0,1) + "ay" + wordPunct[3];
            }
            else {
                return wordPunct[2].substr(1, wordPunct[2].length - 1) + wordPunct[2].substr(0,1) + "ay";
            }

            // if (wordPunct[1] === "" && wordPunct[3]) {
            //     el.substr(1, el.length - 1) + el.substr(0,1) + "ay";
            // }
            // else if (wordPunct[1] !== ""){
            //     word
            // }
            // el.substr(1, el.length - 1) + el.substr(0,1) + "ay";
            // return el;
        // }
    });

    // console.log(pigLatinStrArr);
    // sticking them back tgt
    let pigLatinStr = "";
    for (const cur of pigLatinStrArr) {
        pigLatinStr += `${cur} `;
    }
    pigLatinStr = pigLatinStr.substr(0, pigLatinStr.length - 1); // remove the last whitespace added before
    console.log(pigLatinStr);
    return pigLatinStr;
}

// bug: an extra space at the end

// pigLatin('Pig latin is cool');
// pigLatin('This is my string');
// pigLatin('Pig latin is cool!!');

module.exports = {
    pigLatin
};
