export class User {
  constructor(
    
    public user_name: string,
    public password: string
    
    
  ) {  }
}
export class Parse {
  constructor(
    

    public __v:number,
    public _id: string,
    public about: string,
    public account_status: boolean,
    public date_created: Date,
    public email: string,
    public fav_music: string,
    public firstname: string,
    public hometown: string,
    public lastname: string,
    public phonenumber: number,
    public profile_pic: string,
    public verify_code: number
    
   
   
    
    
   
    
  ) {  }
}

export class Driver {
  constructor(
      
    public _id: string,
    public driver_latitude: string,
    public driver_longtitude : string,
    public res_zipcode: number,
    public res_state: string,
    public res_city: boolean,
    public res_address_2: string,
    public res_address_1: string,
    public license_expire: Date,
    public license_state: string,
    public license_num: string,
    public dob: number,
    public ssn: string,
    public legal_lastname : string,
    public middle_name : string,
    public legal_firstname :string,
    public car_color:string,
    public car_ofdoors:string,
    public car_model: string,
    public car_company: string,
    public car_year: string,
    public ref_code: string,
    public city: string,
    public user_id: string,
    public __v: number,
    public license_status: boolean,
    public driver_mode: boolean

    
   
    
  ) {  }
}

