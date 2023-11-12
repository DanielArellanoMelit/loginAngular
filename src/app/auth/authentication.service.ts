
import { Injectable } from '@angular/core';

export const TOKEN_KEY = 'auth-token';

type JwtToken = {
  id_token: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /*authenticated = false;
  authenticationToken: string | null = null;
  account: Account = null;

  constructor(
    private http: HttpClient,
    private storage: StorageUtil,
    private platform: Platform,
    private router: Router,
    private accountService: AccountService
    ) {
      this.platform.ready().then(async () => {
        this.accountService.identity().subscribe((response)=>{
          this.account = response;
        });
      });
    }

  public login(loginData): Promise<Account> {
    return this.http.post<JwtToken>(`${environment.apiUrl}/authenticate`, loginData)
      .pipe(map(async response => this.storeToken(response.id_token)))
      .toPromise().then(() => this.accountService.identity(true).toPromise());
  }

  logout(): void{
    this.authenticationToken = null;
    this.authenticated = false;
    this.storage.remove(TOKEN_KEY);
    this.accountService.authenticate(null);
    this.router.navigate(['login']);
  }

  private socialLogin(idToken: string): Promise<Account> {
    return this.http.post<JwtToken>(`${environment.apiUrl}/authenticate/google`, idToken)
      .pipe(map(async response => await this.storeToken(response.id_token)))
      .toPromise().then(() => this.accountService.identity(true).toPromise());
  }

  private storeToken(token: string) {
    return this.storage.setItem(TOKEN_KEY, token);
  }
  
  async getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.storage.getItem(TOKEN_KEY).then(token => {
        resolve(token);
      }).catch(_error => resolve(""));
    })
  }*/


}
