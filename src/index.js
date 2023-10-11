import {choice, remove} from './helpers';
import fruits from './foods'

let fruit = choice(fruits);

function fruitDraw() {
    console.log(`I'd like one ${fruit}, please.`);
    console.log(`Here you go: ${fruit}`)
    console.log(`Delicious! May I have another?`)
    let remaining = remove(fruits, fruit);
    console.log(`i'm sorry, no more! We have ${remaining.length} left`);
}