function outer() {
  let a = 10;
  let b = 20;
  let c = 30;

  function inner() {
    console.log(a); // only "a" is used
  }

  return inner;
}

const fn = outer();
fn();

// inspect closure
console.dir(fn);
