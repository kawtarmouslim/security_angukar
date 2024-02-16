export class LoggerUser{
  constructor(public username:String,
              public roles:String[],
              private  _token:String,
              public  _expiration:Date,) {
  }
  get token(){
    if (!this._expiration||new Date()>this._expiration){
      return null;
    }
      return this._token
  }

}
