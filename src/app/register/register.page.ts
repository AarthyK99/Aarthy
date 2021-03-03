import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface ClientData {
  fname: string;
  lname:string;
  dob:Date;
  qal:any;
  gen:any;
  addr: string;
  city:string;
  dis:string;
  state:string;
  pin:number;
  email:any;
  mob:number;
  Aadhar:number;
  pwd:any;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  clientList = [];
  clientData: ClientData;
  clientForm: FormGroup;

  something: string;

  constructor( private firebaseService: FirebaseService,public fb: FormBuilder) {
      this.clientData = {} as ClientData;
     }

  ngOnInit() {

    this.clientForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      qal: ['', [Validators.required]],
      gen: ['', [Validators.required]],
      addr: ['', [Validators.required]],
      city: ['', [Validators.required]],
      dis: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pin: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mob: ['', [Validators.required]],
      Aadhar: ['', [Validators.required]],
      pwd: ['', [Validators.required]],

    })
    this.firebaseService.read_register().subscribe(data => {

      this.clientList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          fname: e.payload.doc.data()['fname'],
          lname: e.payload.doc.data()['lname'],
          dob: e.payload.doc.data()['dob'],
          qal: e.payload.doc.data()['qal'],
          gen: e.payload.doc.data()['gen'],
          addr: e.payload.doc.data()['addr'],
          city: e.payload.doc.data()['city'],
          dis: e.payload.doc.data()['dis'],
          state: e.payload.doc.data()['state'],
          pin: e.payload.doc.data()['pin'],
          email: e.payload.doc.data()['email'],
          mob: e.payload.doc.data()['mob'],
          Aadhar: e.payload.doc.data()['Aadhar'],
          pwd: e.payload.doc.data()['pwd'],
        };
      })
      console.log(this.clientList);

    });

  }


  numberOnlyValidation(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  CreateRecord()
  {
    console.log(this.clientForm.value);
    this.firebaseService.create_register(this.clientForm.value).then(resp => {
      this.clientForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }



}
