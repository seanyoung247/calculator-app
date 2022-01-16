
export default class Calc {
    constructor() {
        this._expression = '';
    }

    get expression() {return this._expression;}
    get formatted() {
        //return this._expression.rßeplace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        // Safari still doesn't support features everyone else has for years...
        return (
            // Split expression on decimal point and operations
            this._expression.split(/([.|/|*|+|-])/g) 
                .map((c,i,a) => 
                    // If current is a number not preceeded by a decimal insert commas at thousands
                    (!isNaN(c) && a[i-1] != '.') ? c.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : c
                ).join('')
        );
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
