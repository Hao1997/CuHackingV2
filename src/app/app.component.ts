import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'cuhacking';
  city = 'New York';
  treasureOpacity:number  = 1.0;
  @ViewChild('treasure') treasure:ElementRef;
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (c): void => {
    this.treasureOpacity = Math.abs(((window.innerHeight - window.pageYOffset)  /window.innerHeight)) + 0.3;
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
  };

  data = {
    labels: ['Housing', 'Startups', 'Transportation', 'Healthcare', 'Environment Quality', 'Cost of Living', 'Safety', 'Economy', 'Education', 'Internet Access', 'Startups', 'Business'],
    datasets: [
      {
        label: 'New York Living',
        backgroundColor: 'rgb(66, 101, 244,0.2)',
        borderColor: 'rgb(89, 65, 244)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [5.3, 7, 8.9, 7.6, 6.4, 3.4, 7.9, 9.2, 5.7, 8.4, 9.6, 9.8, ],
      },

    ]
  };
}
