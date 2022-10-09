// function stringCalculator(str) {
//     if(!str) return 0;
// }

// function stringCalculator(str) {
//     if(!str) {
//         return 0;
//     } return +str;
// }

// function stringCalculator(str) {
//     const argumentsArray = Array.from(str.split(',')).map(x => +x)
//     let sum = 0
//     for(let value of argumentsArray) {
//         sum += value
//     }
//     if(!str) {
//         return 0
//     } return sum
// }

// function stringCalculator(str) {
//     const argumentsArray = Array.from(str.replace(/[\n]/gm, ',').split(',').map(x => +x));
//     let sum = 0
//     for(let value of argumentsArray) {
//         sum += value
//     }
//     if(!str) {
//         return 0
//     } return sum
// }

// function stringCalculator(str) {
//     const argumentsArray = Array.from(str.replace(/\//g, '').replace(/[\n;*%]/gm, ',').split(',').map(x => +x));
//     let sum = 0
//     for(let value of argumentsArray) {
//         sum += value
//     }
//     if(!str) {
//         return 0
//     } return sum
// }

// function stringCalculator(str) {
//     const argumentsArray = Array.from(str.replace(/\//g, '').replace(/[\n;*%]/gm, ',').split(',').map(x => +x));
//     let sum = 0
//     for(let value of argumentsArray) {
//         sum += value
//     }
//     if (argumentsArray.some(v => v < 0)) {
//         for(let neg of argumentsArray) {
//             if(neg < 0) {
//                 return `Negatives are not allowed:${neg}`
//             }
//         } 
//     }
//     return sum
// }

// function stringCalculator(str) {
//     const argumentsArray = Array.from(str.replace(/\//g, '').replace(/[\n;*%]/gm, ',').split(',').map(x => +x));
//     let sum = 0
//     for(let value of argumentsArray) {
//         sum += value
//     }
//     if (argumentsArray.some(v => v < 0)) {
//         const negativesArray = [];
//         for(let neg of argumentsArray) {
//             if(neg < 0) {
//                 negativesArray.push(neg)
//             }
//         } 
//         console.log(negativesArray)
//         return `Negatives are not allowed:${negativesArray}`
//     }
//     return sum
// }

// function stringCalculator(str) {
//     const argumentsArray = Array.from(str.replace(/\//g, '').replace(/[\n;*%]/gm, ',').split(',').map(x => +x));
//     let sum = 0
//     for(let value of argumentsArray) {
//         if(value < 1000) {
//             sum += value
//         }
//     }
//     if (argumentsArray.some(v => v < 0)) {
//         const negativesArray = [];
//         for(let neg of argumentsArray) {
//             if(neg < 0) {
//                 negativesArray.push(neg)
//             }
//         } 
//         console.log(negativesArray)
//         return `Negatives are not allowed:${negativesArray}`
//     }
//     return sum
// }

function stringCalculator(str) {
    const argumentsArray = Array.from(str.replace(/\//g, '').replace(/[\n;*%]/gm, ',').split(',').map(x => +x));
    let sum = 0
    for(let value of argumentsArray) {
        if(value < 1000) {
            sum += value
        }
    }
    if (argumentsArray.some(v => v < 0)) {
        const negativesArray = [];
        for(let neg of argumentsArray) {
            if(neg < 0) {
                negativesArray.push(neg)
            }
        } 
        console.log(negativesArray)
        return `Negatives are not allowed:${negativesArray}`
    }
    return sum
}

//stringCalculator("1,2,-5,-7")

module.exports = stringCalculator;