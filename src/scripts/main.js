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

        politician.item.billPoliticians.forEach(bP => {
            data.getBill(bP.billId)
                .then(parsedBill => {
                    politician.item.billPoliticians.push(parsedBill);
                });
        });
    });
    console.log(politicians);
    politicians.forEach(politician => {
        politician.item.pacDonations.forEach(pacDon => {
            const pacId = pacDon.pacId;
            data.getPac(pacId).then(parsedPac => {
                politician.item.pacDonations.push(parsedPac);
                console.log(politician);
            });
        });
    });
});


