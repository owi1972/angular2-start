import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: './about.template.html',
  styleUrls: [ './about.styles.css' ]
})
export class AboutComponent implements OnInit {
  public about: any;

  constructor(protected route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.forEach((data: {about: any}) => {
      this.about = data.about;
    });
  }
}
