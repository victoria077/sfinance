import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  mobNumberPattern = '\\+7\\([0-9]{3}\\)[0-9]{3}-[0-9]{2}-[0-9]{2}';

  public mask = {
    guide: true,
    showMask: true,
    mask: ['+', '7', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
  };


  ngOnInit() {

  }
}