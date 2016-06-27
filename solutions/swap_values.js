function swapValues(...arguments) {
    var args = Array.from(arguments);
    //var args = [...arguments];
    console.log(args[0]+ " --- " +args[1]);
    var temp = args[0][0];
    args[0][0] = args[0][1];
    args[0][1] = temp;
    return args;
}