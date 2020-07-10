let name: string;
name = 'Lollykrown';
console.log(name);

// Reading files
// const decoder = new TextDecoder('utf-8')
// const data = await Deno.readFile('testing.txt')
// console.log(decoder.decode(data)); 

//or
// const data = await Deno.readTextFile('readme.txt')
// console.log(data);

// Writing files
// const encoder = new TextEncoder()
// const txt = encoder.encode('Hello! Testing write files in deno');
// await Deno.writeFile('readme.txt', txt);

// rename
// await Deno.rename('readme.txt', 'testing.txt');

//Delete file
//await Deno.remove('testing.txt')

//Fetch Api
const res = await fetch('https://swapi.dev/api/films')
const resp = await res.json();
console.log(resp)

