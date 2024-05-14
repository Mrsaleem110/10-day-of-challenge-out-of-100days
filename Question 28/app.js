// *Question 28:* Stages of Life: Determine a person’s life stage with an if-else chain.
// *Explain & TIP:* Use age to check the life stage. This practice shows how to handle multiple conditions with an if-else chain.
var age = 25;
if (age < 2) {
    console.log('The person is baby');
}
if (age < 4) {
    console.log('The person is toddler');
}
if (age < 13) {
    console.log('The person is kid');
}
if (age < 20) {
    console.log('The person is teenager');
}
if (age < 65) {
    console.log('The person is adult');
}
else {
    console.log('The person is elder');
}
