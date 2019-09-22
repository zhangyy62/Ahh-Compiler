import 'mocha';
import * as fs from 'fs';
import * as path from 'path';
import { expect } from 'chai';
import Tokenizer from '../src/lib/tokenizer';

describe('token test',
    () => {
        it('parsing test', () => {
            let input = fs.readFileSync(path.resolve('tests/code.ahh'), 'utf8');
            let tokenizer = new Tokenizer(input);
            let tokens = tokenizer.parse();
            console.log(tokens);
            // expect(true).to.equal(false);
        });
    });