import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MESSAGES} from '../../mock-data/mock-data';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {
  @ViewChild('messagesContainer') messagesContainer: ElementRef | undefined;
  messages = MESSAGES;
  messagesItems: any[] = [];
  isButtonClicked$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  onAcceptButtonClick(): void {
    this.isButtonClicked$.next(true);

    this.messagesItems.push(this.messages[0]);

    let index = 1;
    const timer = setInterval(() => {
      if (index < this.messages.length) {
        this.messagesItems.push(this.messages[index]);
        index++;
      } else {
        clearInterval(timer);
      }
      setTimeout(() => {
        this.messagesContainer!.nativeElement.scrollTop = this.messagesContainer!.nativeElement.scrollHeight;
      }, 0);
    }, 3000);
  }

}
