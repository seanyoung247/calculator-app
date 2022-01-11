
export default class Calc {
    constructor() {
        this._expression = '';
    }

    get expression() {return this._expression;}
    get formatted() {
        return this._expression.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    addCharacter(chr) {
        this._expression += chr;
    }

    clear() {
        this._expression = '';
    }

    del() {
        this._expression = this._expression.slice(0, -1);
    }

    evaluate() {
        this._expression = Function(`return ${this._expression}`)().toString();
    }
}
