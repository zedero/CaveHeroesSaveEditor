import { Injectable } from '@angular/core';
import * as zlib from 'pako';

@Injectable({
  providedIn: 'root'
})
export class DataCompressService {
  constructor() {
    // @ts-ignore
    window.enterCode = (aCode) => {
      aCode = aCode ? aCode : 'devastator';
      const randomUserId = Math.floor(Math.random() * 1000000);
      fetch(`http://www.caveheroes.com/codes.php?code=${aCode}&user=${randomUserId}`, {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        })
        .then(response => response.text())
        .then(contents => console.log(contents));
    };
  }

  decompress(aData) {
    return  zlib.inflate(atob(aData), { to: 'string' });
  }

  compress(aData) {
    console.log(aData);
    return btoa(
      zlib.deflate(aData, { to: 'string' })
    );
  }
}
