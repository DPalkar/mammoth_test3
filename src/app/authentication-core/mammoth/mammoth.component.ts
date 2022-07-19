import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mammoth',
  templateUrl: './mammoth.component.html',
  styleUrls: ['./mammoth.component.css']
})
export class MammothComponent implements OnInit {
  public loadDelay = false;
  constructor(ref: ChangeDetectorRef) {
    setTimeout(() => {
      this.loadDelay = true;
      ref.detectChanges();
    }, 2000);
  }

  ngOnInit() {}
}
