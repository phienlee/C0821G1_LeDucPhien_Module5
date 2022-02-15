import { Component, OnInit } from '@angular/core';
import { Dictionary } from '../dictionary';
import {DictionarysService} from "../service/dictionarys.service";


@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  words: Dictionary[];
  englishMean: string;
  vietnameseMean: string;

  constructor(private dictionaryService: DictionarysService) {
  }

  ngOnInit(): void {
    this.getAllWord();
  }

  getAllWord() {
    this.words = this.dictionaryService.getAll();
    return this.words;
  }

  getVietnameseMeanByEnglishWord(word: string) {
    this.vietnameseMean = this.dictionaryService.getVietnameseMean(word);
  }

  getEnglishMeanByWord(word: string) {
    this.englishMean = this.dictionaryService.getEnglishMeanByWord(word);
  }

}
