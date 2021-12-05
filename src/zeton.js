export class Token {
    constructor(owener, index) {
    this.owener = owener;
    this.index = index;
    this.thrown = false;
    this.id = `Token-$(index)-$(owener.id)`;
    }
} 

