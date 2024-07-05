const address='andoriklla';
const part=address.slice(2,5);
console.log(part);


const sentence='I am a student of cse';
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friends='Raju,kamal,jamal,alamin,najmul';
const friend=friends.split(',');
console.log(friend);

const realfriend=[ 'Raju', 'kamal', 'jamal', 'alamin', 'najmul' ];
console.log(realfriend.join());
console.log(realfriend.join('|'));
console.log(realfriend.join('-'));
