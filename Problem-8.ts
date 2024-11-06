function validateKeys<T>(obj: T, keys: (keyof T)[]) {
  console.log(obj);
  console.log(keys);

  // 
}

// Sample Input:
const person = { name: "Monir", age: 25, email: "monir@gmail.moc" };
console.log(validateKeys(person, ["name", "age"]));
