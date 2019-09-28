import TokenStruct from "base/tokenStruct";

class Parser {

    parser(tokens: TokenStruct[]) {
        let current = 0;

        function walk() {
            let token = tokens[current];

            if (token.type === 'NUMBER') {
                current++;

                return {
                    type: 'NumberLiteral',
                    value: token.value,
                };
            }

            if (token.type === 'PUNCTUATOR') {
                current++;

                return {
                    type: 'PUNCTUATORLiteral',
                    value: token.value,
                };
            }

            if (token.type === 'IDENTIFIER') {

                current++;

                return {
                    type: 'IDENTIFIERLiteral',
                    value: token.value,
                };
            }


            if (token.type === 'STRING') {
                current++;

                return {
                    type: 'StringLiteral',
                    value: token.value,
                };
            }

            if (
                token.type === 'PAREN' &&
                token.value === '('
            ) {

                token = tokens[++current];

                let node = {
                    type: 'CallExpression',
                    name: token.value,
                    params: [],
                };

                token = tokens[++current];
                while (
                    (token.type !== 'PAREN') ||
                    (token.type === 'PAREN' && token.value !== ')')
                ) {
                    node.params.push(walk());
                    token = tokens[current];
                }

                current++;

                return node;
            }

            throw new TypeError(token.type);
        }

        let ast = {
            type: 'Program',
            body: [],
        };

        while (current < tokens.length) {
            ast.body.push(walk());
        }

        return ast;
    }
}

export default Parser;
