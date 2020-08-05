
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

// // Display
//     function displayPass(x) {
//         let ok = parseInt(x);
//         form.screen.value = ok;
           
//        };