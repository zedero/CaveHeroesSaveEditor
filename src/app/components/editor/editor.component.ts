import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { DataCompressService } from '../../services/data-compress.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public testData = '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'
  public decodedData: string;
  public encodedData: string;
  public gameSave: any;
  public premiumFields = [];
  public rewardsFields = [];

  @ViewChild('output') decodedText;

  constructor(private dataCompressService: DataCompressService) { }

  ngOnInit(): void {
    this.decode(this.testData);
  }

  public onInputChange(aEvent) {
    const saveData = aEvent.target.value;
    this.decode(saveData);
  }

  public decode(aSaveData) {
    if (aSaveData && aSaveData !== '') {
      const result = this.dataCompressService.decompress(aSaveData);
      this.decodedData = result;

      const parser = new DOMParser();
      this.gameSave = parser.parseFromString(result, 'text/xml');

      this.createPremiumFields();
      this.createRewardsFields();
    }
  }

  createPremiumFields() {
    this.premiumFields = [];
    const addToPremiumField = (aKey: string, aDesc: string, index = 0) => {
      this.premiumFields.push(
        {
          key: aKey,
          value: this.gameSave.getElementsByTagName(aKey)[index].innerHTML,
          desc: aDesc,
          index,
        }
      );
    };

    addToPremiumField('pu1', 'Battle Speed');
    addToPremiumField('pu2', 'Production 2x');
    addToPremiumField('pu3', 'Double Prestige');
    addToPremiumField('pu4', 'Starter Pack');
    addToPremiumField('pu5', 'Heart Pack');
    addToPremiumField('pu6', 'Divine Equipment');
    addToPremiumField('pu7', 'Beta tester');
    addToPremiumField('r3l6', 'Crystals');
    addToPremiumField('ct23', 'Chests');
  }

  createRewardsFields() {
    this.rewardsFields = [];
    const addToRewardsField = (aKey: string, aDesc: string, aRewardAttr: string,  aReward: string) => {
      let index = 0;
      const list = this.gameSave.getElementsByTagName(aKey);
      for (let i = 0; i < list.length; i++) {
        if (list[i].getAttribute(aRewardAttr) === aReward) {
          index = i;
        }
      }
      console.log(this.gameSave.getElementsByTagName(aKey)[index].getAttribute('o'))
      this.rewardsFields.push(
        {
          key: aKey,
          // value: this.gameSave.getElementsByTagName(aKey)[index].innerHTML,
          o: this.gameSave.getElementsByTagName(aKey)[index].getAttribute('o'),
          a: this.gameSave.getElementsByTagName(aKey)[index].getAttribute('a'),
          desc: aDesc,
          index,
        }
      );
    };

    addToRewardsField('re', 'Battle Speed', 'i', 'overlord1');
  }

  setXmlData(aData) {
    this.gameSave.getElementsByTagName(aData.key)[aData.index].innerHTML = aData.value;
  }

  public encode(aSaveData) {
    this.encodedData = this.dataCompressService.compress(aSaveData);
  }

  public onClickEncode() {
    const xmlSerializer = new XMLSerializer();
    const newSaveXml = xmlSerializer.serializeToString(this.gameSave);
    console.log(newSaveXml);
    // this.encode(this.decodedText.nativeElement.value);
    this.encode(newSaveXml);
  }

}
