function anArgument() {
    var args = Array.prototype.slice.call(arguments);
    if (!args.length) return "You didn't give me any arguments."
    if (args.length===1) return 'You gave me 1 argument and it is "'+args[0]+'".';
    for (var i=0; i<args.length; i++) args[i]+="";
    var last = ' and "'+args[args.length-1]+'".';
    var stuff = args.pop();
    var stuff = JSON.stringify(args);
    stuff = stuff.replace("[", "")
                 .replace("]", "")
                 .replace(/","/g, '", "')
                 .replace(', and',' and');
    return "You gave me "+(args.length+1)+" arguments and they are "+stuff+last;
}