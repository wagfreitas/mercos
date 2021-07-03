import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { MessageService } from '../utils/message.service';

@Component({
  selector: 'app-buscas-gerais',
  templateUrl: './buscas-gerais.component.html',
  styleUrls: ['./buscas-gerais.component.scss']
})
export class BuscasGeraisComponent implements OnInit {

  @Input() variant:number = 1;
  @Input() vertical:boolean = false;
  @Input() searchOnBtnClick:boolean = false;
  @Input() removedSearchField:string;

  @Output() onSearchClick: EventEmitter<any> = new EventEmitter<any>();
  public form: FormGroup;
  public vendaNumeros = [];
  public data: Date;
  public status: string;
  public vendaProdutos: [];

  constructor(public appService:AppService,
              public fb: FormBuilder,
              public messageService: MessageService) { }

  ngOnInit() {
    this.appService.getVendas().subscribe(res =>  {
      this.vendaNumeros = res;
    })

    this.form = this.fb.group({
      vendaNum: null,
    });

  }

  sendMessage(dados): void {
    this.messageService.sendMessage(dados)
  }

  clearMessage(): void {
    this.messageService.clearMessages();
  }


  onChange(){
    this.status = this.form.value.vendaNum.status;
    this.data = this.form.value.vendaNum.date;
    this.vendaProdutos = this.form.value.vendaNum.products
    this.onSearchClick.emit(this.vendaProdutos);

    console.log('dadis recebudis',this.vendaProdutos)
  }

  public getAppearance(){
    return (this.variant != 3) ? 'outline' : '';
  }
  public getFloatLabel(){
    return (this.variant == 1) ? 'always' : '';
  }


}
