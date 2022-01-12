
export default class Calc {
    constructor() {
        this._expression = '';
    }

    get expression() {return this._expression;}
    get formatted() {
        return this._expression.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    _clearErr() {
        if (this._expression === 'ERROR') {
            this._expression = '';
        }
    }

    addCharacter(chr) {
        this._clearErr();
        this._expression += chr;
    }

    clear() {
        this._expression = '';
    }

    del() {
        this._clearErr();
        this._expression = this._expression.slice(0, -1);
    }

    evaluate() {
        this._clearErr();
        if (this._expression) {
            try {
                this._expression = Function(`return ${this._expression}`)().toString();
            } catch (e) {
                this._expression = 'ERROR';
            }
        }
    }
}
