import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { DataCompressService } from '../../services/data-compress.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public testData = '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';
  public decodedData: string;
  public encodedData: string;
  public gameSave: any;
  public premiumFields = [];
  public rewardsFields = [];

  @ViewChild('output') decodedText;
  @ViewChild('inputSaveString') aViewSaveStringElem;

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

    const addToRewardsField = (
      aKey: string,
      aDesc: string,
      aRewardAttr: string,
      aReward: string,
      aHasLinkedElement = false,
      aLinkedElementValue = 0,
    ) => {
      let index = 0;
      const list = this.gameSave.getElementsByTagName(aKey);
      for (let i = 0; i < list.length; i++) {
        if (list[i].getAttribute(aRewardAttr) === aReward) {
          index = i;
        }
      }

      let element;

      if (aHasLinkedElement) {
        element = aLinkedElementValue;
      }

      this.rewardsFields.push(
        {
          key: aKey,
          l: this.gameSave.getElementsByTagName(aKey)[index].getAttribute('l'), // nr
          r: this.gameSave.getElementsByTagName(aKey)[index].getAttribute('r'), // nr
          c: this.gameSave.getElementsByTagName(aKey)[index].getAttribute('c'), // nr
          o: this.gameSave.getElementsByTagName(aKey)[index].getAttribute('o'), // bool ALWAYS
          a: this.gameSave.getElementsByTagName(aKey)[index].getAttribute('a'), // bool
          element,
          desc: aDesc,
          index,
        }
      );
    };

    addToRewardsField('re', 'Overlord Hunter', 'i', 'overlord1');
    addToRewardsField('re', 'Overlord Slayer', 'i', 'overlord5');
    addToRewardsField('re', 'Overlord Destroyer', 'i', 'overlord10');
    addToRewardsField('re', 'Overlord Exterminator', 'i', 'overlord25');
    addToRewardsField('re', 'Overlord Champion', 'i', 'overlord50');
    addToRewardsField('re', 'Academy', 'i', 'academy', true, 7);
    addToRewardsField('re', 'Crusher', 'i', 'crusher', true, 6000);
    addToRewardsField('re', 'Decay', 'i', 'decay');
    addToRewardsField('re', 'Demon Slaughter', 'i', 'slaughter');
  }

  setXmlData(aData) {
    this.gameSave.getElementsByTagName(aData.key)[aData.index].innerHTML = aData.value;
  }

  setXmlAttrData(aData) {
    if (aData.hasOwnProperty('o')) {
      this.gameSave.getElementsByTagName(aData.key)[aData.index].setAttribute('o', aData.o);
    }
    if (aData.hasOwnProperty('a')) {
      this.gameSave.getElementsByTagName(aData.key)[aData.index].setAttribute('a', aData.a);

      // if it has a linked element and we activate this var, check if the minimum is larger then the current. If so set it.
      if (aData.a && aData.element) {
        const name = this.gameSave.getElementsByTagName(aData.key)[aData.index].getAttribute('i');
        if (this.gameSave.getElementsByTagName(name)[0].innerHTML < aData.element) {
          this.gameSave.getElementsByTagName(name)[0].innerHTML = aData.element;
        }
      }
    }
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

  public loadSaveInput() {
    this.decode(this.aViewSaveStringElem.nativeElement.value);
    console.log(this.gameSave)
  }

  public clearSaveInput() {
    this.testData = '';
  }

}
