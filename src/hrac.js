import {Token} from "./zeton.js";

const NUMBER_TOKENS = 21

export class Player {
    constructor(name, id, color, active=false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.getToken(NUMBER_TOKENS);
    }

    getToken(num) {
        const tokens = [];
        for(let i = 0; i < num; i++) {
            const token = new Token(i, this);
            tokens.push(token)
        }
        return tokens
    }
}


