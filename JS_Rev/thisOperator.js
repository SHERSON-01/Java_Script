function normalFunction(){
    console.log(this);
}

const ArrowFunction = () => {
    console.log(this);
};

const obj = {
    normalfxnmethod: normalFunction,
    arrowfxnmethod: ArrowFunction,
};

obj.normalfxnmethod();
obj.arrowfxnmethod();

