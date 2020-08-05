
        //PinMatch button event handler,
        const pinBtn = document.getElementById("generatePinBtn");
        pinBtn.addEventListener("click", function () {
        document.getElementById("generateDisplay").value = getRandIntValue;
        });
        //Random Number generate .
        function getRandomInt() {
            let random = Math.floor((Math.random() * 9000) + 1000);
            let randomNum = parseInt(random);
            return randomNum;
        };
        let getRandIntValue = getRandomInt();
        //Display 

        // function displayPass(x) {
        //     let getPassValue = currentPassNumber;
        //     getPassValue = x;
        // }


    function displayPass(x) {
       form.display.value = x;
           
       };