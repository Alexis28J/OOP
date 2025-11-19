class Rettangolo {
    constructor(base, height, color){
        this.base = base;
        this.height = height;
        this.color = color;
    }
    
    calcolaArea(){
        return this.base * this.height;
    }

    calcolaPerimetro(){
        return (this.base + this.height)*2;
    }

    toString(){
        const scheda = "Rettangolo \n" +
                       "base: " + this.base + "\n" +
                       "altezza: " + this.height + "\n" + 
                       "colore: " + this.color + "\n" + 
                       "area: " + this.calcolaArea() + "\n" +
                       "perimetro: " + this.calcolaPerimetro();

                       return scheda;
    }
}