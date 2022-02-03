function triangleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
 
 const p = parseFloat( area.toFixed(3));

  return p;
}
console.log(triangleArea(8, 11, 13));
console.log(triangleArea(3, 5, 7));
