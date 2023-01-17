const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favorite? ", (meal) => {
        rl.question("What is your favorite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your favorite? ", (sport) => {
            rl.question("What is your superpower? Tell us what you are amazing at! ", (superpower) => {
              console.log(`\nThank you for your answers! Here is a profile description for you to use: \n\nMy name is ${name}. I like ${activity} while listening to ${music}. My favourite meal is ${meal}, and I love to eat ${food}. My favourite sport is ${sport} and my superpower is ${superpower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
