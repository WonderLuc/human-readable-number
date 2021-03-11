module.exports = function toReadable (number) {
  let ones =['one','two','three','four','five','six','seven','eight','nine'];
  let tens =['ten','twen','thir','for','fif','six','seven','eigh','nine'];
  let strFromNum = ''+number;
  let str="";
  
  if(number == 0){
      return 'zero';
  }
  if(strFromNum.length == 3){
      str += ones[+strFromNum[0]-1] +' hundred';
      strFromNum = strFromNum.slice(1,);
  }
  
  if(strFromNum.length == 2 && +strFromNum[0] != 0){
    if(+strFromNum > 9 && +strFromNum < 15){
        switch (+strFromNum){
          case 10:
              str += " " + tens[0];
              break;
          case 11:
              str += " eleven";
              break;
          case 12:
              str += ' twelve';
              break;
          case 13:
              str += " thirteen";
              break;
          case 14:
              str += " " + "fourteen";
              break;
        }
        return str.trim();
    }
    if(+strFromNum < 20){
        str += " " + tens[+strFromNum[1] - 1]+'teen';
        return str.trim();
    }
    str += " " + tens[+strFromNum[0] - 1]+'ty';
  }
  if(strFromNum.length ==2){
    strFromNum = strFromNum.slice(1,);
  }
  if(+strFromNum == 0){
    return str.trim();
  }
  str += ' ' + ones[+strFromNum - 1];
  return str.trim();
}
