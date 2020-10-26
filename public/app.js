window.addEventListener('load', function() {
    console.log("Yes!");

    //Add here code to fetch all chirps on page load


    //Adding button event listener
    let button = document.getElementById('submitButton');
    button.addEventListener('click', function() {
        console.log("Submit button was presssed!");

        //Grab input values
        let date = document.getElementById('poop-date').value;
        let color = document.getElementById('poop-color').value;
        let shape = document.getElementById('poop-shape').value;
        let size = document.getElementById('poop-size').value;
        let consistency = document.getElementById('poop-consistency').value;
        let LengthOfTime = document.getElementById('poop-LengthOfTime').value;


        //Create poop Object
        let poopObj = {
            "date": date,
            "color": color,
            "shape": shape,
            "size": size,
            "consistency": consistency,
            "LengthOfTime": LengthOfTime,

        };
        console.log(poopObj);

        let poopObjJSON = JSON.stringify(poopObj);
        console.log(poopObjJSON);

        //Send JSON to the server
        fetch('/poopData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: poopObjJSON
            })
            .then(res => res.json())
            .then(data => {
                console.log("Hooray!");
                console.log(data);
            })
    });
});