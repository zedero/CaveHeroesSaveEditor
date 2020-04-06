import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

enum DATA_TYPES {
  boolean = 'boolean',
  number = 'number',
  text = 'text',
  attributes = 'attributes',
  invalid = 'invalid'
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

  public key;
  public value;
  public desc;
  public index;
  public type;

  public data;

  public dataEnum = DATA_TYPES;

  @Input()
  set itemdata(data: any) {
    this.key = data.key;
    this.value = data.value;
    this.desc = data.desc;
    this.index = data.index;
    this.data = data;
    this.setDataType(data.value);
  }

  @Output() changeXmlData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setDataType(aData) {
    if (aData === undefined) {
      this.type = DATA_TYPES.attributes;
    } else if (aData === 'n' || aData === 'y') {
      this.type = DATA_TYPES.boolean;
    } else if (/^\d+$/.test(aData)) {
      this.type = DATA_TYPES.number;
    } else if (typeof aData === 'string') {
      this.type = DATA_TYPES.text;
    } else {
      this.type = DATA_TYPES.invalid;
    }
  }

  onChange(aEvent) {
    this.data.value = aEvent.target.value;
    this.changeXmlData.emit(this.data);
  }

}
