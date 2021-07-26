function textArray(string, num) {
    const separators = [' ', '\\\. ', '\\\.', ', ', '\\\(', '\\\)'];
    
    const result = string.split(new RegExp(separators.join('|'), 'g'));

    let newArray = [];
    
    for (let i = 0; i < result.length; i++) {
        if(result[i].length > num) {
           newArray.push(result[i]); 
        }
    }
    console.log(newArray);
}

textArray('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5);
textArray('Над городом облака, коридоры, берега, проспект, река.', 7);