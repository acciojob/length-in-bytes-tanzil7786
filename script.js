const byteSize = (str) => {
  // write your code here
  const blob = new Blob([str]);

  const sizeInBytes = blob.size;
  return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
