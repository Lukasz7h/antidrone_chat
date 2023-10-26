import { Component } from '@angular/core';
import { ChatViewService } from './chat-view.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent {

  constructor(private chatViewService: ChatViewService){}
}
