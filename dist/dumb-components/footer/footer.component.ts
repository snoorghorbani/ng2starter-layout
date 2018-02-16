import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div fxLayoutAlign="center center" class="footer-text">&copy; 2005-2017 همه حقوق برای شرکت شاتل محفوظ است. </div>`,
  styles: [`:host {     position: absolute;     bottom: 0;     left: 0;     right: 0;     border-top: 1px solid #e5e5e5;     padding: 8px;     overflow: hidden; } .footer-text{     position: relative;     top: 12px; }`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}