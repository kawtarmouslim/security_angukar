export interface LoginRequest{
  username:String;
  password:String;
}
export interface LoginResponse{
 accesssToken:String;
  refreshToken:String;
}
