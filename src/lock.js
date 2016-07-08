export default class Lock {

  constructor (secret, keyObject) {
    this.unlock = function (attempt){

      if(attempt === keyObject){
        return secret;
      }
    }
    }


}
