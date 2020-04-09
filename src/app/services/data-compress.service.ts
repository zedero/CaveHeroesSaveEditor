import { Injectable } from '@angular/core';
import * as zlib from 'pako';

@Injectable({
  providedIn: 'root'
})
export class DataCompressService {
  constructor() {

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
