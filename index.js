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

  if((age>=19 && age<=24) && (bmi>=19 && bmi<=24)){

    alert(`Your bmi is ${bmi} and you have a healthy weight!`)

  }

  else if((age>=25 && age<=34) && (bmi>=20 && bmi<=25)){

    alert(`Your bmi is ${bmi} and you have a healthy weight!`)

  }

  else if((age>=35 && age<=44) && (bmi>=21 && bmi<=26)){

    alert(`Your bmi is ${bmi} and you have a healthy weight!`)

  }

  else if((age>=45 && age<=54) && (bmi>=22 && bmi<=27)){

    alert(`Your bmi is ${bmi} and you have a healthy weight!`)

  }

  else if((age>=55 && age<=64) && (bmi>=23 && bmi<=28)){

    alert(`Your bmi is ${bmi} and you have a healthy weight!`)

  }

  else if((age>=65) && (bmi>=24 && bmi<=29)){

    alert(`Your bmi is ${bmi} and you have a healthy weight!`)

  }
  
  else{

// You dont necessarily need to use \n to create spacing when using string interpolation. You do need it if youre doing strings with ""

    alert(`Your bmi is ${bmi} and you are overweight. \n Age:${age} \n Height:${height*100} \n Weight:${weight}`
    )

  }


}
