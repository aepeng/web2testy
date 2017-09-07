console.log('hello my name!')
document.write('<h1> Hi!</h1>')
let noun_list = ["my brother", "yo mama", "John", "a mermaid", "the dog", "Plato"];
let adv_list = ["financially", "willfully", "abruptly", "endlessly", "firmly", "delightfully", "quickly", "lightly", "eternally", "delicately", "wearily", "sorrowfully", "beautifully"];
let adj = prompt('Enter an adjective.');
let noun = noun_list[Math.floor(Math.random()*noun_list.length)];

document.write("Once upon a time " + noun + " was in Web Design II. The classroom was " + adv_list[Math.floor(Math.random()*adv_list.length)] + " decorated, and " + noun + " was shocked and " + adj + ". After class, " + noun + " " + adv_list[Math.floor(Math.random()*adv_list.length)] + " went home.");
