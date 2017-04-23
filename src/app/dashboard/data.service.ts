import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Parse } from './mocks';
@Injectable()
export class DataService 
{
   constructor(private http: Http) { }
  
   getparsedata()  : Promise<Parse[]> {
    


               return this.http.get('https://destiny.mod.bz/listusers')
                  .toPromise()
                  .then(res => <Parse[]> res.json(), this.handleError)
                  .then(data => { console.log(data);  return data; }); 


   }

               private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  }