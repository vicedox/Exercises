function first() {
  //actions
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`Im studying ${lang}`);
  callback();
}

function done() {
  console.log('Im done');
}

learnJS('JS', done);