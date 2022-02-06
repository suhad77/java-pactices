let suhad = {
    name : "suhad",
    age : 22,
    address : "kurigram",
    fullName : function() {

        return this.name + " " + this.address;

        console.log(fullName);
    }
};

    suhad.fullName();
    console.log(suhad.name);
    console.log(suhad["age"]);