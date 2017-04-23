import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Parse } from './mock';
import { Driver } from './mock';
@Injectable()
export class DataService 
{
   constructor(private http: Http) { }
  
   getuserlist()  : Promise<Parse[]> {
    


               return this.http.get('https://destiny.mod.bz/listusers')
                  .toPromise()
                  .then(res => <Parse[]> res.json(), this.handleError)
                  .then(data => { console.log(data);  return data; }); 


   }


   getdriverlist() : Promise<Driver[]> {
    


               return this.http.get('https://destiny.mod.bz/driverlist')
                  .toPromise()
                  .then(res => <Driver[]> res.json(), this.handleError)
                  .then(data => { console.log(data); return data; }); 
                  

                                 
   }

    getdrivehistory() : Promise<Driver[]> {
    


               return this.http.get('https://destiny.mod.bz/getridehistory')
                  .toPromise()
                  .then(res => <Driver[]> res.json(), this.handleError)
                  .then(data => { console.log(data); return data; }); 
                  

                                 
   }


 





getdriver(user_id: any): Promise<Driver> {


    return this.getdriverlist()
               .then(drivers => drivers.find(driver => driver.user_id === user_id ));
  }

  getonlinedrivers() : Promise<Driver[]>
  {
       return this.getdriverlist()
       .then(drivers=> drivers.filter(drivers=> drivers.driver_mode === true));

       //.then(drivers=> drivers.find(driver=>driver.driver_mode === false));

  }
   getonlinedriver() : Promise<Driver>
  {
       return this.getdriverlist().then(dri=> dri.find(cri=> cri.license_status === true));
       

  }

  getonlinedrivertrue() : Promise<Driver[]>
  {
    return this.getdriverlist().then(mri=> mri.filter(mr=> mr.license_status === true && mr.driver_mode === true ));
  }





               private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  }