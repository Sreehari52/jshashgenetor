// Sreehari Kuttan 28942374238748121272173238221932189548238232380189217823218122832172
function hashgenerator(){
function RandomCapital(params) {
    let rc = Math.floor(Math.random(100*1)*25+1)
    switch (rc) {
        case 1:
            return "A"
            break;
            case 2:
                return "B"
                break;
                case 3:
            return "C"
            break;
            case 4:
            return "D"
            break;
            case 5:
            return "E"
            break;
            case 6:
            return "F"
            break;
            case 7:
            return "G"
            break;
            case 8:
            return "H"
            break;
            case 9:
            return "I"
            break;
            case 10:
            return "J"
            break;
            case 11:
            return "K"
            break;
            case 12:
            return "L"
            break;
            case 13:
            return "M"
            break;
            case 14:
            return "N"
            break;
            case 15:
            return "O"
            break;
            case 16:
            return "P"
            break;
            case 17:
            return "Q"
            break;
            case 18:
            return "R"
            break;
            case 19:
            return "S"
            break;
            case 20:
            return "T"
            break;
            case 21:
            return "U"
            break;
            case 22:
            return "V"
            break;
            case 23:
            return "W"
            break;
            case 24:
            return "X"
            break;
            case 25:
            return "Y"
            break;
            case 26:
            return "Z"
            break;
        default:

            break;
    }
}
function RandomSmall(params) {
    let sc = Math.floor(Math.random(100*1)*25+1)
    switch (sc) {
        case 1:
            return "a"
            break;
            case 2:
                return "b"
                break;
                case 3:
            return "c"
            break;
            case 4:
            return "d"
            break;
            case 5:
            return "e"
            break;
            case 6:
            return "f"
            break;
            case 7:
            return "g"
            break;
            case 8:
            return "h"
            break;
            case 9:
            return "i"
            break;
            case 10:
            return "j"
            break;
            case 11:
            return "k"
            break;
            case 12:
            return "l"
            break;
            case 13:
            return "m"
            break;
            case 14:
            return "n"
            break;
            case 15:
            return "o"
            break;
            case 16:
            return "p"
            break;
            case 17:
            return "q"
            break;
            case 18:
            return "r"
            break;
            case 19:
            return "s"
            break;
            case 20:
            return "t"
            break;
            case 21:
            return "u"
            break;
            case 22:
            return "v"
            break;
            case 23:
            return "w"
            break;
            case 24:
            return "x"
            break;
            case 25:
            return "y"
            break;
            case 26:
            return "z"
            break;
        default:

            break;
    }
}
function randomNum(){
    let rn = Math.floor(Math.random(100*12)*148572389)
    return rn;
}

let capitalLetter = RandomCapital()
let smallletter = RandomSmall()
let randomNumber = randomNum()
let auth = Math.floor(Math.random(1*1)*5+1)
    
switch (auth) {
        case 1:
            console.log("#"+capitalLetter+smallletter+randomNumber+capitalLetter+smallletter+randomNumber+capitalLetter+smallletter+randomNumber+smallletter+capitalLetter+":HASHGENERATED SUCESSFULLY")
            break;
            case 2:
            console.log("#"+smallletter+capitalLetter+randomNumber+capitalLetter+smallletter+randomNumber+capitalLetter+smallletter+randomNumber+smallletter+randomNumber+":HASHGENERATED SUCESSFULLY")
            break;
            case 3:
            console.log("#"+smallletter+randomNumber+capitalLetter+smallletter+capitalLetter+smallletter+randomNumber+capitalLetter+smallletter+randomNumber+smallletter+":HASHGENERATED SUCESSFULLY")
            break;
            case 4:
            console.log("#"+capitalLetter+smallletter+randomNumber+capitalLetter+capitalLetter+smallletter+randomNumber+capitalLetter+smallletter+randomNumber+smallletter+":HASHGENERATED SUCESSFULLY")
            break;
            case 5:
            console.log("#"+randomNumber+capitalLetter+smallletter+randomNumber+capitalLetter+smallletter+randomNumber+capitalLetter+smallletter+randomNumber+smallletter+":HASHGENERATED SUCESSFULLY")
            break;
    
        default:
            break;
    }
}

