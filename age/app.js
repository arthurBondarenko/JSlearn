let input = document.querySelector("input");
let output = document.getElementById("output");
input.oninput = () => {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let dob = new Date(input.value);

  let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  let age;

  age = today.getFullYear() - dob.getFullYear();
  if (today < dobnow) {
    age = age - 1;
  }

  output.textContent = `Age: ${age}`;
};
