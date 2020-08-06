
        //PinMatch Button Event Handler.
        const pinBtn = document.getElementById("generatePinBtn");
        pinBtn.addEventListener("click", function () {
            function getRandomInt() {
                let random = Math.floor((Math.random() * 9000) + 1000);
                let randomNum = parseInt(random);
                return randomNum;
            };
            let getRandIntValue = getRandomInt();
            document.getElementById("generateDisplay").value = getRandIntValue;
        });
        //Submit Button Event Handler.
        const submitBtnMass = document.getElementById("submitBtn");
        submitBtnMass.addEventListener("click", function () {
            const calScreen = document.getElementById("screenValue").value;
            let calScreenNum = parseInt(calScreen);

            const randScreen = document.getElementById("generateDisplay").value;
            let randScreenNum = parseInt(randScreen);
        //Message show Condition.
            if (randScreenNum == calScreenNum) {
                const notifySection1 = document.getElementById("notifyFalse");
                notifySection1.style.display = "none";
                const notifySection2 = document.getElementById("notifyTrue");
                notifySection2.style.display = "block";
            } else {
                const notifySection1 = document.getElementById("notifyFalse");
                notifySection1.style.display = "block";
                const notifySection2 = document.getElementById("notifyTrue");
                notifySection2.style.display = "none";
            }
        });

