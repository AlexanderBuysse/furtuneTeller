{
    let $buttonLatitude = document.querySelector(`.latitude`);
    let $buttonLongitude = document.querySelector(`.longitude`);
    const blauw = [`Sky`, `Blu`, `Icy`, `Watery`];
    const groen = [`Grassy`, `Sssssnaky`, `Leafy`, `Emeraldy`];
    const rood = [`Stop signy`, `Rosey`, `Bloody`, `Chilli`];
    const geel = [`Yello`, `Sunny `, `Pinty`, `Sunflowery`];


    const handleButtonSubmit = e => {

        

        e.preventDefault();

        const $form = e.currentTarget;

        let cordinatLatitude = [];
        let cordinatLongitude = [];
        const latitude = [document.querySelector(`.latitude`).textContent];
        const longitude = [document.querySelector(`.longitude`).textContent];
        const splitLat = latitude.join(``).split(`: `);
        const splitLong = longitude.join(``).split(`: `);
        //console.log(latitude, longitude);
        //console.log(splitLat, splitLong);
        cordinatLatitude.push(splitLat[1]);
        cordinatLongitude.push(splitLong[1]);
        //console.log(cordinatLongitude)
        //console.log(cordinatLatitude)
       const street= streetName(cordinatLatitude);
       const city = cityName(cordinatLongitude);

        
        const answers = $form.querySelectorAll(`.radio:checked`);
        const answersValue = Array.from(answers).map($radio => {
            return ($radio.parentElement.textContent).trim();
        });
        const chosenColor = answersValue[0];
        const chosenBedTime = [answersValue[1]];
        const chosenAmountDrinks = answersValue[2];

       const numberforColor = inputInNumber(chosenBedTime, chosenAmountDrinks);
        const colorHair = numberInColor(numberforColor);

        const firstRapName = colorNamePicker(chosenColor);

        const $last = $form.querySelector(`.text-field`);
        const lastName = $last.value;
        const GansterNameLast= lastRapName(lastName);

        showInHtml(firstRapName, GansterNameLast, colorHair, street, city);
    }

    // first rapname
    // -------------------------------------------------------------------------------------
    const colorNamePicker = (color) => {
        const randomNumber = Math.floor(Math.random() * 4);
        let rapName = ``;
        switch (color) {
            case `Blauw`:
                rapName = blauw[randomNumber];
                console.log(blauw);
                break;

            case `Rood`:
                rapName = rood[randomNumber];
                break;

            case `Geel`:
                rapName = geel[randomNumber];
                break;

            case `Groen`:
                rapName = groen[randomNumber];
                break;
        }
        return rapName;
    }
    // -------------------------------------------------------------------------------------


    // Last rap name
    // -------------------------------------------------------------------------------------
    const lastRapName = name => {
        const reversed = name.split(``).reverse().join(``);
        //const nameStr = name[0];
        let rapNameLast = ``;
        
        if (reversed.toLowerCase() === name.toLowerCase()){
            rapNameLast = `The Real Gangstar`
        } else{
            switch (name.split(``).length) {
                case 2:
                    rapNameLast = `Capone`;
                    break;
                case 3: 
                    rapNameLast=`Whack`;
                    break;
                case 4:
                    rapNameLast = `Pistol`;
                    break;
                case 5:
                    rapNameLast = `Owl`;
                    break;
                case 6:
                    rapNameLast = `Man`;
                    break;
                case 7:
                    rapNameLast = `Chee`;
                    break;
                case 8:
                    rapNameLast = `Tarzan`;
                    break;
                case 9:
                    rapNameLast = `Maximus`;
                    break;
                case 10:
                    rapNameLast = `Blonde`;
                    break;
                case 11:
                    rapNameLast = `Beauty`;
                    break;
                case 12:
                    rapNameLast = `Scarface`;
                    break;
                case 13:
                    rapNameLast = `That Guy`;
                    break;
                case 14:
                    rapNameLast = `Prince`;
                    break;

                default:
                    rapNameLast = `Baby`;
                    break;
            }
        }
        return rapNameLast;
    }
    // -------------------------------------------------------------------------------------


    //toon in html
    // -------------------------------------------------------------------------------------
    const showInHtml = (first, last, hair, street, city) =>{
        document.querySelector(`.gangster__name`).innerHTML= `Hierboven zie je je toekomstige partner, haar gangsternaam is <b class= "bold">${first} ${last}</b>. <br>
        Ga naar <b class= "bold">${street}straat</b> in <b class= "bold">${city}</b> en vraag ernaar.`;
        switch (hair) {
            case `black`:
                document.querySelector(`.article-img__background-color`).classList.add(`black`);
                break;
            case `green`:
                document.querySelector(`.article-img__background-color`).classList.add(`green`);
                break;
            case `grey`:
                document.querySelector(`.article-img__background-color`).classList.add(`grey`);
                break;
            case`brown`:
                document.querySelector(`.article-img__background-color`).classList.add(`brown`);
                break;
            case `blond`:
                document.querySelector(`.article-img__background-color`).classList.add(`blond`);
                break;
                
        }
        document.querySelector(`.border`).classList.add(`green-color`);
    }
    // -------------------------------------------------------------------------------------


    // geolocatie
    // -------------------------------------------------------------------------------------
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    const showPosition = (position) => {
        $buttonLatitude.textContent = `Breedtegraad: ${position.coords.latitude}`;
        $buttonLongitude.textContent = `Lengtegraad: ${position.coords.longitude}`;
    }
    // -------------------------------------------------------------------------------------


    //straat en stad naam generen
    // -------------------------------------------------------------------------------------
    const streetName =(latitude)=>{
        const latitudeSplit= [latitude.join(`. `).split(`.`)[1]];
        const lengthLatitude = latitudeSplit.join(``).split(``).map(item => parseFloat(item));
        const oneNumber =(lengthLatitude[0])
        let adjective = ``;
        switch (oneNumber) {
            case 0:
                adjective= `Vinken`;
                break;
            case 1: 
                adjective=`College`;
                break;
            case 2:
                adjective=`Veld`; 
                break
            case 3:
                adjective= `Keizer`;
                break;
            case 4:
                adjective= `Altena`;
                break;
            case 5:
                adjective= `Peper`;
                break;
            case 6: 
                adjective= `Olie`;
                break;
            case 7:
                adjective= `Nieuwstraat`;
                break;
            case 8:
                adjective= `Sport`;
                break;
            case 9:
                adjective= `Klooster`;
                break;
        }
        return adjective
    }

    const cityName = (longitude)=>{
        const longitudeSplit = [longitude.join(`. `).split(`.`)[1]];
        const lengthLongitude = longitudeSplit.join(``).split(``).map(item => parseFloat(item));
        const oneNumber2 = lengthLongitude[0];
        let chosenCity= ``;
        switch (oneNumber2) {
            case 0:
                chosenCity=`Brugge`;
                break;
            case 1:
                chosenCity=`Kortrijk`;
                break;
            case 2:
                chosenCity=`Brussel`;
                break;
            case 3:
                chosenCity=`Antwerpen`;
                break;
            case 4: 
                chosenCity=`Sijsele`;
                break;
            case 5:
                chosenCity=`Moerkerke`;
                break;
            case 6:
                chosenCity=`Hasselt`;
                break;
            case 7:
                chosenCity=`Leuven`;
                break;
            case 8: 
                chosenCity=`Gent`;
                break;
            case 9:
                chosenCity=`Genk`;
                break;
        }
        return chosenCity;
    }
    // -------------------------------------------------------------------------------------

    // haar kleur
    // -------------------------------------------------------------------------------------
    const inputInNumber= (bed, drinks) =>{
        
        const numberBed = [bed.join(``).split(``).filter(item => item !== `u`).join(``)];
        numberBed.push(drinks);
    
        const numbersBed = numberBed.map(item => parseFloat(item))
        
        const addTwoBedNumbers= numbersBed[0]+numbersBed[1];
        
        return addTwoBedNumbers;
    }

    const numberInColor = number =>{
        let hairColor = ``
        if(number=== 38|| number=== 23|| number=== 124||number=== 140){
            hairColor= `black`;
        } else if(number=== 40||number=== 25||number=== 101){
            hairColor= `grey`;
        }else if(number=== 42||number=== 5||number=== 120||number=== 142){
            hairColor=`brown`;
        } else if(number === 19||number=== 21||number=== 122||number===144){
            hairColor=`blond`;
        }else{
            hairColor=`green`;
        }
        return hairColor
    }
    // -------------------------------------------------------------------------------------


    const init = () => {
        getLocation();
        document.querySelector(`.form-register`).addEventListener(`submit`, handleButtonSubmit);
    };

    init();
}