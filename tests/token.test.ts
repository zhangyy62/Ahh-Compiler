import 'mocha';
import * as fs from 'fs';
import * as path from 'path';
import { expect } from 'chai';
import Tokenizer from '../src/lib/tokenizer';
import Parser from '../src/lib/parser';

describe('token test',
    () => {
        it.skip('tokenizer test', () => {
            let input = fs.readFileSync(path.resolve('tests/code.ahh'), 'utf8');
            let tokenizer = new Tokenizer(input);
            let tokens = tokenizer.parse();
            console.log(tokens);
            // expect(true).to.equal(false);
        });

        it('parsing test', () => {
            let input = fs.readFileSync(path.resolve('tests/code.ahh'), 'utf8');
            let tokenizer = new Tokenizer(input);
            let tokens = tokenizer.parse();
            let parser = new Parser();
            let res = parser.parser(tokens);
            console.log(res);
            // expect(true).to.equal(false);
        });
    });