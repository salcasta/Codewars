// Bumps in the Road


/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/



function bump(str){
    let strArr = str.split('')
    let countArr = []
    
    strArr.map((l, i, a) => l === 'n' ? countArr.push(1) : null )
    
    let count = countArr.reduce((a,c) => a + c, 0)
    
    if (count <= 15) {
        return "Woohoo!"
    } else {
        return "Car Dead"
    }
    
}


//OR


const bump = x => x.split('n').length > 16 ? "Car Dead" : "Woohoo!"
