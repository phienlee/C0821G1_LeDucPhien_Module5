import {Injectable} from '@angular/core';
import {Dictionary} from "../dictionary";


@Injectable({
  providedIn: 'root'
})
export class DictionarysService {

  words: Dictionary[] = [
    {
      englishMean: 'Hello',
      vietnameseMean: 'Xin chao',
      details: 'Thán từ, Danh từ'
    },
    {
      englishMean: 'Book',
      vietnameseMean: 'Sach',
      details: 'Danh từ' +
        'sách'
    }, {
      englishMean: 'Table',
      vietnameseMean: 'Cai Ban',
      details: 'Danh từ\n' +
        'cái bàn'
    }, {
      englishMean: 'Fan',
      vietnameseMean: 'Cai quat',
      details: 'Danh từ\n' +
        'cái quạt'
    },
    {
      englishMean: 'Camera',
      vietnameseMean: 'May anh',
      details: 'Danh từ\n' +
        'máy chụp ảnh'
    },
    {
      englishMean: 'Run',
      vietnameseMean: 'Chay',
      details: 'Động từ\n' +
        'chạy'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.words;
  }

  getDetailsByEnglishMean(word: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (word === this.words[i].englishMean) {
        return this.words[i].details;
      }
    }
  }

  getVietnameseMean(word: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (word === this.words[i].englishMean) {
        return this.words[i].vietnameseMean;
      }
    }
  }

  getEnglishMeanByWord(word: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (word === this.words[i].vietnameseMean) {
        return this.words[i].englishMean;
      }
    }
  }
}
