import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.less']
})
export class CustomerInfoComponent implements OnInit {

  constructor(
    public db: AngularFirestore
  ) { }

  ngOnInit() {
    const currentUser = this.db.collection('users', user => { return user.where('idToken', '==', 'NF1P7fzo7UYtW7MWXrIQknEVRRL2')})
    .doc('customerInfo');
    currentUser.valueChanges().subscribe(val => {
      console.log(val)
    });
  }

}
