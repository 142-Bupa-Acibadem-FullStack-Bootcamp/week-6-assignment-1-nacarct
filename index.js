let sourceNums = [1,2,3,4,5,6,7,8,9];
let targetNum = 10;

function solutionOne(){
    for (let i = 0; i < sourceNums.length; i++){
        let sNums = [...sourceNums];
        sNums.splice(i);

        for (let x = 0; x < sNums.length; x++){
            if ((sourceNums[i] + sNums[x]) == targetNum){
                console.log(sourceNums.indexOf(sourceNums[i]).toString() + " " + sourceNums.indexOf(sNums[x]).toString());
            }
        }
    }
}

function solutionTwo(){
    let sNums = [];
    let nNums = [...sourceNums];

    for (let i = 1; i <= targetNum; i++){

        let num = targetNum - i;

        if (nNums.includes(num) && nNums.includes(i) && i !== num){
            let nums = [sourceNums.indexOf(num),sourceNums.indexOf(i)];

            nNums.splice(nNums.indexOf(num));

            sNums.push(nums);
        }
    }

    sNums.map((x) => console.log(x.toString()))
}

console.log("Solution One");
solutionOne();

console.log("Solution Two");
solutionTwo();