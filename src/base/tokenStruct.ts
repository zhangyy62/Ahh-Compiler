class TokenStruct {
    private _type: string;
    private _value: string;

    constructor(type: string, value: string) {
        this._type = type;
        this._value = value;
    }

    get type(): string {
        return this._type;
    }

    get value(): string {
        return this._value;
    }
}

export default TokenStruct;