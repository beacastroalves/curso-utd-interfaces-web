// import fs from 'fs';
import { write } from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw error;
//   console.log(data + ' with readFile');
// });


// readFileSync() = Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data + ' with readFileSync');


// readFile() - Promise .then()
// fs.readFile('test.txt', 'utf8')
//   .then((data) => console.log(data + ' with readFile Promises'))
//   .catch((err) => console.log(err));

// readFileSync() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()

const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello, I am writing to this file');
    console.log('File written to...')
  } catch (error) {
    console.log(error);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile('test.txt', '\nThis is appended text');
    console.log('File appended to...')
  } catch (error) {
    console.log(error);
  }
};


writeFile();
appendFile();
readFile();
