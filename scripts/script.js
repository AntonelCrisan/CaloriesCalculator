//gender radio check
const male = document.getElementById('iMale');
const female = document.getElementById('iFemale');
male.addEventListener('click', () => {
  female.checked = false;
});
female.addEventListener('click', () => {
  male.checked = false;
});
//end gender radio check

//objective radio check
const maintenance = document.getElementById('maintenance');
const weeakening = document.getElementById('weeakening');
const muscle = document.getElementById('muscle');
maintenance.addEventListener('click', () => {
    weeakening.checked = false;
    muscle.checked = false;
});
weeakening.addEventListener('click', () => {
    maintenance.checked = false;
    muscle.checked = false;
});
muscle.addEventListener('click', () => {
    maintenance.checked = false;
    weeakening.checked = false;
});
//end objective radio check

//functia care calculeaza caloriile si macronutrienti
document.querySelector(".calculate").onclick = () => {
    let age = document.querySelector("#iAge").value;
    let height = document.querySelector("#iHeight").value;
    let weight = document.querySelector("#iWeight").value;
    let selectElement = document.getElementById("iActivity");
    let selectedOption = selectElement.options[selectElement.selectedIndex].value;
    let errorMessage = document.getElementById("errorMessage");
    let result = document.querySelector("#result");
    if(isNaN(age) || isNaN(height) || isNaN(weight)){
        errorMessage.innerHTML = "Please enter valid input!";
        result.style.display = 'none';
    }else if(age === "" || height === "" || weight === ""){
        errorMessage.innerHTML = "Please complete all field!";
        result.style.display = 'none';
    }else if(age <= 0 || height <= 0 || weight <= 0){
        errorMessage.innerHTML = "Value must be greater then or equal to 1!";
        result.style.display = 'none';
    }else if(age < 15 || age > 80){
        errorMessage.innerHTML = "Please provide an age between 15 and 80!"
        result.style.display = 'none';
    }else if(height.length > 6 || weight.length > 6){
        errorMessage.innerHTML = "Height and weight cannot be greater than three digits!"
        result.style.display = 'none';
    }else{
        //aici afisez rezultatul
        result.style.display = 'block';
        errorMessage.innerHTML = null;
        result.innerHTML = `
        <div class="display">
               <p id="result1"></p>
               <p id="result2"></p>
               <p id="result3"></p>
       </div>
       <div class = "separate"></div>
       <div class="icons">
           <div>
               <h2>CARBS</h2>
               <img src="icons/rice.png">
               <h2 id = "carbs"></h2>
           </div>
           <div>
               <h2>PROTEIN</h2>
               <img src="icons/whey.png">
               <h2 id ="protein"></h2>
           </div>
           <div>
           <h2>FATS</h2>
           <img src="icons/avocado.png">
           <h2 id="fats"></h2>
           </div>
       </div>
           `;
    }
    switch(selectedOption){
        case "sedentary":
                if(document.getElementById('iMale').checked){
                    if(document.getElementById('maintenance').checked){
                        document.getElementById("result1").innerHTML = "Your daily requirement is <strong>" + parseInt((66 + (13.7 * weight) + 5 * height - (6.8 * age)) * 1.2) + "</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.7) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.7) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((66 + (13.7 * weight) + 5 * height - (6.8 * age)) * 1.2) * 0.25) / 9) + "g";

                    }else if(document.getElementById('weeakening').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>" +(parseInt((66 +(13.7 * weight) + 5 * height - (6.8 * age))*1.2) - 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.8) * 1.5) + "g"; 
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.8) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.2) - 300) * 0.20) / 9) + "g";

                    }else if(document.getElementById('muscle').checked){
                        document.getElementById("result3").innerHTML = "Your daily requirement is <strong>"+(parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.2) + 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.8)* 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.8) + "g";
                        document.getElementById('fats').innerHTML =  parseInt(((((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.2) + 300) * 0.30) / 9) + "g";

                    }else{
                        errorMessage.innerHTML = "Something wrong!";
                    }
                }
                else if(document.getElementById('iFemale').checked){
                    if(document.getElementById('maintenance').checked){
                        document.getElementById("result1").innerHTML = "Your daily requirement is <strong> "+ parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.2) + "</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.7) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.7) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.2) * 0.25) / 9) + "g";
                    }else if(document.getElementById('weeakening').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>"+(parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.2) - 300)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.8 ) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.8) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.2) - 300) * 0.20) / 9) + "g";
                    }else if(document.getElementById('muscle').checked){
                        document.getElementById("result3").innerHTML = "Your daily requirement is <strong>"+(parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.2) + 300)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.8) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.8) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.2) + 300) * 0.30) / 9) + "g";
                    }else{
                        errorMessage.innerHTML = "Something wrong!";
                    }
                }            
            break;
          case "average":
                if(document.getElementById('iMale').checked){
                    if(document.getElementById('maintenance').checked){
                        document.getElementById("result1").innerHTML = "Your daily requirement is <strong>" +parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.375)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.8) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.8) + "g";
                        document.getElementById('fats').innerHTML =parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.375) * 0.25) / 9) + "g";
                    }else if(document.getElementById('weeakening').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>"+(parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.375) - 300) + "</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.9) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.9) + "g";
                        document.getElementById('fats').innerHTML =parseInt(((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.375) - 300) * 0.20) / 9) + "g";
                    }else if(document.getElementById('muscle').checked){
                        document.getElementById("result3").innerHTML = "Your daily requirement is <strong>"+(parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.375) + 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.9) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.9) + "g";
                        document.getElementById('fats').innerHTML =parseInt(((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.375) + 300) * 0.30) / 9) + "g";
                    }else{
                        errorMessage.innerHTML = "Something wrong!";
                    }
                  
                }      
                else if(document.getElementById('iFemale').checked){
                    if(document.getElementById('maintenance').checked){
                        document.getElementById("result1").innerHTML = "Your daily requirement is <strong>"+parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.375)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.8) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.8) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.375) * 0.25) / 9) + "g";
                    }else if(document.getElementById('weeakening').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>"+(parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.375) - 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.9) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.9) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.375) - 300) * 0.20) / 9) + "g";
                    }else if(document.getElementById('muscle').checked){
                        document.getElementById("result3").innerHTML = "Your daily requirement is <strong>"+(parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.375) + 300)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.9) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.9) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.375) + 300) * 0.30) / 9) + "g";
                    }else{
                        errorMessage.innerHTML = "Something wrong!";
                    }
                }     
            break;
          case "moderate":
                if(document.getElementById('iMale').checked){
                    if(document.getElementById('maintenance').checked){
                        document.getElementById("result1").innerHTML = "Your daily requirement is <strong>"+parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.55)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.9) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.55) * 0.25) / 9) + "g";
                    }else if(document.getElementById('weeakening').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>"+parseInt(((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.55) - 300)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.55) - 300) * 0.20) / 9) + "g";
                    }else if(document.getElementById('muscle').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>"+parseInt(((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.55) + 300)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2) * 1.9) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.55) + 300) * 0.30) / 9) + "g";
                    }else{
                        errorMessage.innerHTML = "Something wrong!";
                    }
                }
                else if(document.getElementById('iFemale').checked){
                    if(document.getElementById('maintenance').checked){
                        document.getElementById("result1").innerHTML = "Your daily requirement is <strong>"+parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.55)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 1.9) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 1.9) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.55) * 0.25) / 9) + "g";
                    }else if(document.getElementById('weeakening').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>"+(parseInt((665 + (9.5 * weight)+ 1.8 * height - (4.7 * age))*1.55) - 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.55) - 300) * 0.20) / 9) + "g";
                    }else if(document.getElementById('muscle').checked){
                        document.getElementById("result3").innerHTML = "Your daily requirement is <strong>"+(parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.55) + 300)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.55) + 300) * 0.30) / 9) + "g";
                    
                    }else{
                        errorMessage.innerHTML = "Something wrong!";
                    }
                } 
            break;
          case "intense":
                if(document.getElementById('iMale').checked){
                    if(document.getElementById('maintenance').checked){
                        document.getElementById("result1").innerHTML = "Your daily requirement is <strong>" +parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.725)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.1) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.1) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.725) * 0.25) / 9) + "g";
                    }else if(document.getElementById('weeakening').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>"+(parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.725) - 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.2) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.2) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.725) - 300) * 0.20) / 9) + "g";
                    }else if(document.getElementById('muscle').checked){
                        document.getElementById("result3").innerHTML = "Your daily requirement is <strong>"+(parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.725) + 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.2) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.2) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.725) * 0.30) / 9) + "g";
                    }else{
                        errorMessage.innerHTML = "Something wrong!";
                    }
                }
                else if(document.getElementById('iFemale').checked){
                    if(document.getElementById('maintenance').checked){
                        document.getElementById("result1").innerHTML = "Your daily requirement is <strong>"+parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.72)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.1) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.1) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.72) * 0.25) / 9) + "g";
                    }
                    else if(document.getElementById('weeakening').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>"+(parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.72) - 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.2) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.2) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.72) * 0.20) / 9) + "g";
                    }
                    else if(document.getElementById('muscle').checked){
                        document.getElementById("result3").innerHTML = "Your daily requirement is <strong>"+(parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.72) + 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.2) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.2) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.172) * 0.30) / 9) + "g";
                    }else{
                        errorMessage.innerHTML = "Something wrong!";
                    }  
                }   
            break;
          case "very_intense":
                if(document.getElementById('iMale').checked){
                    if(document.getElementById('maintenance').checked){
                        document.getElementById("result1").innerHTML = "Your daily requirement is <strong>" +parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.9)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.2) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.2) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.9) * 0.25) / 9) + "g";
                    }else if(document.getElementById('weeakening').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>"+(parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.9) - 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.3) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.3) + "g";
                        document.getElementById('fats').innerHTML = parseInt(((((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.9) - 300) * 0.20) / 9) + "g";
                    }else if(document.getElementById('muscle').checked){
                        document.getElementById("result3").innerHTML = "Your daily requirement is <strong>"+(parseInt((66 +(13.7 * weight)+ 5 * height - (6.8 * age))*1.9) + 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.3) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.3) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.9) * 0.30) / 9) + "g";
                    }else{
                        errorMessage.innerHTML = "Something wrong!";
                    }
                }
                else if(document.getElementById('iFemale').checked){
                    if(document.getElementById('maintenance').checked){
                        document.getElementById("result1").innerHTML = "Your daily requirement is <strong>"+parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.9)+"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.2) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.2) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.9) * 0.25) / 9) + "g";
                    }else if(document.getElementById('weeakening').checked){
                        document.getElementById("result2").innerHTML = "Your daily requirement is <strong>"+(parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.9) - 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.3) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.3) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.9) * 0.20) / 9) + "g";
                    }else if(document.getElementById('muscle').checked){
                        document.getElementById("result3").innerHTML = "Your daily requirement is <strong>"+(parseInt((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.9) + 300) +"</strong> calories.";
                        document.getElementById('carbs').innerHTML = parseInt((weight * 2.3) * 1.5) + "g";
                        document.getElementById('protein').innerHTML = parseInt(weight * 2.3) + "g";
                        document.getElementById('fats').innerHTML = parseInt((((665 +(9.5 * weight)+ 1.8 * height - (4.7 * age))*1.9) * 0.30) / 9) + "g";
                    }else{

                    }
                }
            break;
          default:
           alert("Sometghing wrong!");
            break;
        }  
}

//aici afisez informatii despre calorii
let img = document.querySelector("#show_more");
let popup = document.querySelector("#info_calories");
popup.style.display = 'none';
img.addEventListener('click', () => {
  if (popup.style.display === 'none') {
    popup.style.display = 'block';
    img.style.transform = 'rotate(180deg)';
  } else {
    popup.style.display = 'none';
    img.style.transform = 'rotate(0deg)';
  }
});