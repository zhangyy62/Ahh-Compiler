import TokenStruct from "../base/tokenStruct";

const SYMBOL_TABLE: { [key: string]: string } = {
    '(': 'PAREN',
    ')': 'PAREN',
    ';': 'PUNCTUATOR',
    '=': 'PUNCTUATOR',
    '+': 'PUNCTUATOR',
    'var': 'DECLARATION',
};

class Tokenizer {
    private _token: string;
    private _index: number = 0;

    constructor(token: string) {
        this._token = token;
    }

    parse(): TokenStruct[] {
        let tokens = [];
        if (!this._token) {
            return [];
        }
        while (this._index < this._token.length) {
            let char = this._token[this._index];
            if (SYMBOL_TABLE[char]) {
                tokens.push(new TokenStruct(SYMBOL_TABLE[char], char));
                this._index++;
                continue;
            }

            let WHITESPACE = /\s/;
            if (WHITESPACE.test(char)) {
                this._index++;
                continue;
            }

            let NUMBERS = /[0-9]/;
            if (NUMBERS.test(char)) {

                let value = '';

                while (NUMBERS.test(char)) {
                    value += char;
                    char = this._token[++this._index];
                }

                tokens.push(new TokenStruct('NUMBER', value));

                continue;
            }

            if (char === '"') {
                let value = '';

                char = this._token[++this._index];

                while (char !== '"') {
                    value += char;
                    char = this._token[++this._index];
                }

                char = this._token[++this._index];

                tokens.push(new TokenStruct('STRING', value));

                continue;
            }

            let LETTERS = /[a-z]/i;
            if (LETTERS.test(char)) {
                let value = '';

                while (LETTERS.test(char)) {
                    value += char;
                    char = this._token[++this._index];
                }
                if (SYMBOL_TABLE[value]) {
                    tokens.push(new TokenStruct(SYMBOL_TABLE[value], value));
                } else {
                    tokens.push(new TokenStruct('IDENTIFIER', value));
                }
                continue;
            }

            throw new TypeError('Unknown character: ' + char);
        }

        return tokens;
    }
}

export default Tokenizer;
