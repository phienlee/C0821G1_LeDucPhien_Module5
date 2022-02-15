import {Component, Input, OnInit} from '@angular/core';
import {DictionarysService} from '../service/dictionarys.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Dictionary} from '../model/dictionary';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  word: any;

  constructor(private dictionaryService: DictionarysService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      this.word = this.dictionaryService.getDetailsByEnglishMean(word);
    });
  }
}
