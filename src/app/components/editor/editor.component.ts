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
    const addToPremiumField = (aKey: string, aDesc: string, aInfo: string, index = 0) => {
      this.premiumFields.push(
        {
          key: aKey,
          value: this.gameSave.getElementsByTagName(aKey)[index].innerHTML,
          desc: aDesc,
          info: aInfo,
          index,
        }
      );
    };

    addToPremiumField('pu1', 'Battle Speed', '');
    addToPremiumField('pu2', 'Production 2x', '');
    addToPremiumField('pu3',  'Double Prestige', '');
    addToPremiumField('pu4', 'Starter Pack', '');
    addToPremiumField('pu5',  'Heart Pack', '');
    addToPremiumField('pu6',  'Divine Equipment', '');
    addToPremiumField('pu7', 'Beta tester', '');
    addToPremiumField('r3l6',  'Crystals', '');
    addToPremiumField('ct23', 'Chests', '');
  }

  createRewardsFields() {
    this.rewardsFields = [];

    const addToRewardsField = (
      aKey: string,
      aDesc: string,
      aInfo: string,
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
          info: aInfo,
          index,
        }
      );
    };


    addToRewardsField('re', 'Demon Fighter', '100/1000/10k/100k/1M/10M', 'i', 'demonf');
    addToRewardsField('re', 'The Thread of Giants', '?/?/6000/?/?', 'i', 'bosses');
    addToRewardsField('re', 'Construction', '?/?/?/5000/?', 'i', 'construction');
    addToRewardsField('re', 'The Population', '?/?/?/?/?/10M/?/?/?', 'i', 'population');
    addToRewardsField('re', 'Golden King', '?/?/?/1e30/?/?/?/', 'i', 'goldsmith');
    addToRewardsField('re', 'Gem King', '?/?/?/100e27/?/?/?/', 'i', 'gemcollector');
    addToRewardsField('re', 'Dark Lord', '?/?/?/?/?/?/6B/?/?', 'i', 'darklord');
    addToRewardsField('re', 'Wagon of Mana', '?/?/6M/66M/666M/?', 'i', 'pennyn');
    addToRewardsField('re', 'Conqueror', '?/?/?/180/?/?', 'i', 'conqueror');
    addToRewardsField('re', 'Price Factor', '16/?/166/?', 'i', 'price');
    addToRewardsField('re', 'Unspikeable', '13/?/?/?/?/?', 'i', 'devastators');
    addToRewardsField('re', 'Magic Science', '?/?/?/?/?', 'i', 'science', true, 36);
    addToRewardsField('re', 'Unserviceable', '166/?/?/?', 'i', 'unserviceable');
    // other
    addToRewardsField('re', 'Overlord Hunter', '', 'i', 'overlord1');
    addToRewardsField('re', 'Overlord Slayer', '', 'i', 'overlord5');
    addToRewardsField('re', 'Overlord Destroyer', '', 'i', 'overlord10');
    addToRewardsField('re', 'Overlord Exterminator', '', 'i', 'overlord25');
    addToRewardsField('re', 'Overlord Champion', '', 'i', 'overlord50');
    addToRewardsField('re', 'Dark Loot', '', 'i', 'darkloot');
    // addToRewardsField('re', 'Academy', '', 'i', 'academy', true, 7);
    // addToRewardsField('re', 'Crusher', '', 'i', 'crusher', true, 6000);
    // addToRewardsField('re', 'Decay', '', 'i', 'decay');
    // addToRewardsField('re', 'Demon Slaughter', '', 'i', 'slaughter');
  }

  setXmlData(aData) {
    this.gameSave.getElementsByTagName(aData.key)[aData.index].innerHTML = aData.value;
  }

  setXmlAttrData(aData) {
    if (aData.hasOwnProperty('o')) {
      this.gameSave.getElementsByTagName(aData.key)[aData.index].setAttribute('o', aData.o);
    }
    if (aData.hasOwnProperty('c')) {
      this.gameSave.getElementsByTagName(aData.key)[aData.index].setAttribute('c', aData.c);
    }
    if (aData.hasOwnProperty('l')) {
      this.gameSave.getElementsByTagName(aData.key)[aData.index].setAttribute('l', aData.l);
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
