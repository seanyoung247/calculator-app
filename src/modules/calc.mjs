
export default class Calc {
    constructor() {
        this._expression = '';
        this._evaluated = false;
    }

    get expression() {return this._expression;}
    get formatted() {
        const expr = this._expression || '0';
        //return expr.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        // Safari still doesn't support regex features everyone else has for years...
        return (
            // Split expression on decimal point and operations
            expr.split(/([.|/|*|+|-])/g) 
                .map((c,i,a) => 
                    // If current is a number not preceeded by a decimal insert commas at thousands
                    (!isNaN(c) && a[i-1] != '.') ? c.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : c
                ).join('')
        );
    }

    static get validOps() { return ['/','*','+','-']; }

    _clearErr() {
        if (this._expression === 'ERROR') {
            this._expression = '';
            this._evaluated = false;
        }
    }

    addCharacter(chr) {
        this._clearErr();
        
        // Don't add if evaluated and not operation
        if ( !this._evaluated || Calc.validOps.includes(chr) ) {
            this._expression += chr;
            this._evaluated = false;
        }
    }

    clear() {
        this._expression = '';
        this._evaluated = false;
    }

    del() {
        if (!this._evaluated) {
            this._clearErr();
            this._expression = this._expression.slice(0, -1);
        } else {
            this.clear();
        }
    }

    evaluate() {
        this._clearErr();
        if (this._expression) {
            try {
                this._expression = Function(`return ${this._expression}`)().toString();
                this._evaluated = true;
            } catch (e) {
                this._expression = 'ERROR';
            }
        }
    }
}
