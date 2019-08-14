import data from "./data.js";
import factory from "./factory.js";

const politicians = [];

// Chain promises together to get the necessary data to make a card with all of a politician's information
data.getPoliticians()
    .then(parsedItems => {
        parsedItems.forEach(politician => {
            // const politician = {item};
            politicians.push(politician);
        });
    return politicians;
}).then(politicians => {
    // Iterate over the array of politician objects
    politicians.forEach(politician => {

        // Create the HTML Representation for the politician with headings and necessary containers
        const politicianContainer = document.querySelector(".politician__container");
        const HTMLRepresentation = factory.createPoliticianHTML(politician);
        factory.addToDOM(politicianContainer, HTMLRepresentation);

        // Create a bills array for each politician, get the bills they have sponsored based on the billId and add the returned bill objects to the bills array
        const bills = [];

        politician.billPoliticians.forEach(bP => {
            data.getBill(bP.billId)
                .then(parsedBill => {
                    bills.push(parsedBill);
                    console.log(bills);
                    return bills;
                })
                // Put the array of fetched bills into the politician object with the property 'billsArray', and create a list item with each bill's name and add it to that politician's bill list container
                .then(bills => {
                    politician.billsArray = bills;
                    politician.billsArray.forEach(bill => {
                        const billContainer = document.querySelector(`.bill__list--${politician.id}`);
                        const billHTML = factory.createBillHTML(bill);
                        factory.addToDOM(billContainer, billHTML);
                    });
                });
        });

        // Create a pacs array for each politician, get the pacs that have donated to them based on pacId and add the returned pac objects to the pacs array
        const pacs = [];
        politician.pacDonations.forEach(pacDon => {
            const pacId = pacDon.pacId;
            data.getPac(pacId)
                .then(parsedPac => {
                    pacs.push(parsedPac);
                    return pacs;
            })
            // Put the array of fetched pacs into the politician object with the property 'pacsArray', and create a list item with each pac's name and add it to that politicians pac list container
            .then(pacs => {
                politician.pacsArray = pacs;
                politician.pacsArray.forEach(pac => {
                    const pacContainer = document.querySelector(`.pac__list--${politician.id}`);
                    const pacHTML = factory.createPacHTML(pac);
                    factory.addToDOM(pacContainer, pacHTML);
                });
            });
        });

        // Fetch interests table 
        const companies = [];
        politician.billsArray.forEach(bill => {

        })
    });
    return politicians;
}).then(politicians => {


    return politicians;
});


