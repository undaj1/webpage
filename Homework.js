const minInput = document.getElementById("mins");
const maxInput = document.getElementById("maxs");
const main = document.getElementById("box");
const btnOne = document.getElementById("1");
const btnTwo = document.getElementById("2");
const btnSix = document.getElementById("6")




minInput.value = 1;
maxInput.value = 100;



// Function that generate/remove divs
const create = function (){
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    for (let i = 1; i <= 100; i++) {
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "myid" + i); //giving id to every div

        if (i < minInput.value || i > maxInput.value) {
            newDiv.style = "display: none";

        } else {
            if (i % 3 === 0 && i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i+ " = FizzBuzz"));
                main.appendChild(newDiv).setAttribute("class", "fizbuz");

            } else if (i % 3 === 0) {
                newPar.appendChild(document.createTextNode(i + " = Fizz"));
                main.appendChild(newDiv).setAttribute("class", "fiz");
            
            } else if (i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i + " = Buzz"));
                main.appendChild(newDiv).setAttribute("class", "buz");

            } else {
                newPar.appendChild(document.createTextNode(i));
                main.appendChild(newDiv).setAttribute("class", "num");
            }
        }
    }
}



//adds event to first INPUT (sets min value)

    minInput.onkeyup = function (e) {
        this.value = minInput.value.replace(/^(0*)/, "");
        if (minInput.value >= 1 && minInput.value <= 100) {
            this.value = minInput.value;
            
        } else if (minInput.value.length === 0) {
            minInput.value = null;

        } else {
            minInput.value = null;
            alert('Incorrect number!');
        }

        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        //create();


    }

    //adds event to first INPUT (sets min value)

    maxInput.onkeyup = function (e) {
        this.value = maxInput.value.replace(/^(0*)/, "");
        if (maxInput.value >= 1 && maxInput.value <= 100) {
            this.value = maxInput.value;
            
        } else if (maxInput.value.length === 0) {
            maxInput.value = null;

        } else {
            maxInput.value = null;
            alert('Incorrect number!');
        }

        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        //create();


    }

//btns RESET and REFRESH

    btnOne.onclick = function () {
        minInput.value= "";
        maxInput.value = "";
        create();
    }



    btnTwo.onclick = function() {
        minInput.value = 1;
        maxInput.value = 100;
        create();
    }



//JQuery scripts for selecting divs according to class
    
        $(document).ready(function(){ $('#3').click(function(){
            create()
            $(".num, .buz, .fizbuz").toggle();
            });
        });

        $(document).ready(function(){ $('#4').click(function(){
            create()
            $(".num, .fiz, .fizbuz").toggle();
            
            });
        });

        $(document).ready(function(){ $('#5').click(function(){
            create()
            $(".num, .buz, .fiz").toggle();
            });
        });





