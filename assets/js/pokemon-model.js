class Pokemon {
    name;
    type;
    types;
    order;
    photo;
    constructor(name, order, types, photo) {
        this.name = name;
        this.order = order;
        this.types = types.map((t) => {
            console.log("t: ", t);
            return {
                typeName: t.type.name
            }
        });
        this.photo = photo
    }

    setType(types) {
        if (types.length) this.type = types[0];
    }
}
