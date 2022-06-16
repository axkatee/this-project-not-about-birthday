import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MESSAGES} from '@mock-data';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {
  @ViewChild('messagesContainer') messagesContainer: ElementRef | undefined;
  @Output() showGift = new EventEmitter<boolean>()
  messages = MESSAGES;
  messagesItems: any[] = [];
  isButtonClicked$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void { }

  onAcceptButtonClick(): void {
    this.isButtonClicked$.next(true);

    this.messagesItems.push(this.messages[0]);

    let index = 1;
    const timer = setInterval(() => {
      if (index < this.messages.length) {
        this.messagesItems.push(this.messages[index]);
        index++;
      } else {
        this.showGift.emit(true);
        clearInterval(timer);
      }
      setTimeout(() => {
        this.messagesContainer!.nativeElement.scrollTop = this.messagesContainer!.nativeElement.scrollHeight;
      });
    }, 3000);
  }

}
