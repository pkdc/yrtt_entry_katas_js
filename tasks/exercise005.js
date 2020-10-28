// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed
// stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator
// returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats.
// In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously
// around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow,
// the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating
// waves have been produced. (Source Wikipedia)

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string
// in an array where an uppercase letter is a person standing up.

// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function mexicanWave(str){
    // Your code here!

    // check if the str is an empty string
    // if(str === "") {
    //     return [];
    // }

    // create the array of strings with all spectators sitting
    let sit_waves = `${str},`.repeat(str.length).split(',');    //bug, added one more ","
    sit_waves.pop();    // pop off the last ","
    console.log(sit_waves);
    sit_waves.pop;

    // Make relevant spectator stand on each waves
    let stand_waves = sit_waves.map((spec_state, t) => {
        // change the t th char, of the spec_state
        let letter = spec_state.substr(t, 1);

        // Stand up only if not a whitespace
        // and stick the letter back to its original place
        const re = /\s/;
        if (!re.test(letter)) {
            letter = letter.toUpperCase();
        }

        let stand_wave = "";
        if (t === 0) {
            // first case
            // the letter occupies 1 space
            stand_wave = letter + spec_state.substr(t + 1, spec_state.length - t - 1);
        }
        else if (t === spec_state.length - 1) {
            //last case
            // the letter occupies 1 space
            stand_wave = spec_state.substr(0, spec_state.length - 1) + letter;
        }
        else {
            // normal (not the first or last) case
            // the letter occupies 1 space
            // eg: "hello", length = 5; t = 1
            stand_wave =  spec_state.substr(0, t) + letter + spec_state.substr(t + 1 , spec_state.length - 1 - t);
        }
        // console.log(stand_wave);
        return stand_wave;
    });

    console.log(stand_waves);
    return stand_waves;
}
mexicanWave("");
mexicanWave("hello");
mexicanWave("coding");  //Eroor in the test
    // wrong in dealing with space
// module.exports = {
//     mexicanWave
// };
