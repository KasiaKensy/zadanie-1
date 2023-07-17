class StringBuilder {
    constructor(baseString = "") {
        this.value = baseString;
    }
    append(str) {
        builder.value = str + this.value;
    }
    prepend(str) {
        builder.value = this.value + str;
    }
    pad(str) {
        builder.value = str + this.value + str;
    }
}

const builder = new StringBuilder(".");

builder.append("^");
builder.prepend("^");
builder.pad("=");

alert(builder);
