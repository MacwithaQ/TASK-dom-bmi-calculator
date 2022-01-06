function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });


  // You are going to write the code here before the curly braces 👇🏻
  height = height/100;
  let bmi = weight/(height^2);

  if(bmi<18.5){

    alert(`Your bmi is ${bmi} and you are under weight.`)

  }

  else if(bmi<=24.9){

    alert(`Your bmi is ${bmi} and you have a healthy weight!`)

  }

  else if(bmi<=29.9){

    alert(`Your bmi is ${bmi} and you are overweight.`)

  }

  else if(bmi>=30.0){

    alert(`Your bmi is ${bmi} and you are obese.`)

  }


}
