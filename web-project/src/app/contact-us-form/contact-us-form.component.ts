import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from  'angularfire2/database'; 
import  { Observable } from  'rxjs';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {

  name: '';
  email: '';
  message: '';
  ContactUsForm: FormGroup;
  messages: Observable<any[]>;

  constructor(private fb: FormBuilder, public db: AngularFireDatabase) {
    this.ContactUsForm = this.fb.group({
      Cname : ['', [Validators.required]],
      Cemail : ['', [Validators.required, Validators.email]],
      Cmessage : ['', [Validators.required]], 
    });
    this.messages = db.list('messages').valueChanges();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.db.list('messages').push({name : this.name, email : this.email, message : this.message});
    alert('Thank you for contacting us, your message has gone through!');
  }

  clearForm(){
    this.ContactUsForm.reset();
  }

}
