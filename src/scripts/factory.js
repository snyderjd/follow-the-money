const factory = Object.create({
    createPoliticianHTML: (politicObject) => {
        return `<section class="politician__${politicObject.id}">
                    <h1>${politicObject.name}</h1>
                    <section class="bills__${politicObject.id}">
                        <h3>Sponsored Bills</h3>
                        <ul class="bill__list--${politicObject.id}">
                        </ul>
                    </section>

                    <section class="donors__${politicObject.id}">
                        <h3>Related PACs</h3>
                        <ul class="pac__list--${politicObject.id}">
                        </ul>
                    </section>

                    <section class="companies__${politicObject.id}">
                        <h3>Related Corporations</h3>
                    </section>
                </section>`;
    },
    createBillHTML: (billObject) => {
        return `<li>${billObject.name}</li>`;
    },
    createPacHTML: (pacObject) => {
        return `<li>${pacObject.name}</li>`;
    },
    addToDOM: (container, HTMLString) => {
        container.innerHTML += HTMLString;
    }
});

export default factory;