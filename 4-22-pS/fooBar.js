function FooBar(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("foobar");
    } else if (i % 3 == 0) {
      console.log("foo");
    } else if (i % 5 == 0) {
      console.log("bar");
    } else {
      console.log(i);
    }
  }
}
console.log(FooBar(20));
