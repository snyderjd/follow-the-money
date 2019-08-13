const data = Object.create({
    getBillPoliticians: () => {
        return fetch("http://localhost:8088/billPoliticians?_expand=bill&_expand=politician")
            .then(response => response.json());
    },
    getPoliticians: () => {
        return fetch("http://localhost:8088/politicians?_embed=pacDonations&_embed=billPoliticians")
            .then(response => response.json());
    },
    getBill: (billId) => {
        return fetch(`http://localhost:8088/bills/${billId}?_expand=interest`)
            .then(response => response.json());
    }
});

export default data;