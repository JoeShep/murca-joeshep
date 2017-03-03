const chalk = require("chalk");
const {bgBlue, white, bgWhite, bgRed} = require("chalk");
const stringLength = require("string-length");

// console.log(chalk.blue("Go Wildcats!"));

// // combine styled and normal strings
// let rednBlue = chalk.blue('Hello, ') + 'World' + chalk.red('!');
// console.log(rednBlue );

// // compose multiple styles using the chainable API
// let multiStyle = chalk.bgRed.bold('Hello, world!');
// console.log(multiStyle);

// // pass in multiple arguments
// let wordList = chalk.green('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz');
// console.log(wordList );

// // nest styles
// let nested = chalk.red('Hello', chalk.underline.bgBlue('world') + '!');
// console.log(nested );

// Make a flag
// let blueFieldTest = chalk.bgBlue("  *  *                 ")
// console.log(blueFieldTest);

// yuck. Maybe this:

const STAR_PADDING = bgBlue("  "),
      STAR_MARGIN = bgBlue(" "),
      STAR = white.bgBlue("\u2606"),
      PADDED_STAR = STAR_PADDING + STAR;

for (let i = 1; i < 14; i++) {
  let repeatNum = 7,
      stripeLen = 50,
      fieldLen = 0,
      starField = "",
      stripeColor;

  if (i % 2 === 0) {
    repeatNum = 6;
    starField = i < 8 ? STAR_MARGIN + PADDED_STAR.repeat(repeatNum) + STAR_MARGIN.repeat(4) : "";
    stripeColor = bgWhite;
  } else {
    starField = i < 8 ? PADDED_STAR.repeat(repeatNum) + STAR_MARGIN.repeat(2) : "";
    stripeColor = bgRed;
  }

  // Trying to use regular String.length was giving me 225 or 235.
  // Something to do with ansi escape codes. Installed string-length module,
  // which ignores ansi escape codes
  fieldLen = stringLength(starField);
  stripeLen -= fieldLen;

  process.stdout.write(starField + makeStripe(stripeLen, stripeColor) + "\n");
}

function makeStripe(chars, color) {
  let stripe = color(" ".repeat(chars));
  return stripe;
}

