import data from "./data.js";

const politicians = [];

// Chain promises together to get the necessary data to make a card with all of a politician's information
data.getPoliticians()
    .then(parsedItems => {
        parsedItems.forEach(item => {
            const politician = {item};
            politicians.push(politician);
        });
    return politicians;
}).then(politicians => {
    politicians.forEach(politician => {

        console.log(politician.item.billPoliticians);
        politician.item.billPoliticians.forEach(bP => {
            console.log(bP.billId);
            data.getBill(bP.billId)
                .then(parsedBill => {
                    politician.item.billPoliticians.push(parsedBill);
                });
        });
    });
});
