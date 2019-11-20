import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {
  hidden = false;
  tintColor = '#108ee9';
  unselectedTintColor = '#888';
  tabbarStyle: object = { height: '100vh' };
  selectedIndex = 1;
  tabBarTabOnPress(pressParam: any) {
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
  }
  constructor() { }

  ngOnInit() {
  }

}
