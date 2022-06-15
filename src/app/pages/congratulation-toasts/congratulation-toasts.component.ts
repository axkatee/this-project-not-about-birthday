import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AnimationClasses} from '@consts';
import {CongratulationToasts} from '../../mock-data/mock-data';

@Component({
  selector: 'app-congratulation-toasts',
  templateUrl: './congratulation-toasts.component.html',
  styleUrls: ['./congratulation-toasts.component.scss']
})
export class CongratulationToastsComponent implements OnInit {
  public toastMessage = '';
  private isAnimationEnds = true;

  constructor(
    private renderer: Renderer2
  ) { }

  @ViewChild('leftWineglass') wineglassLeft!: ElementRef;
  @ViewChild('rightWineglass') wineglassRight!: ElementRef;
  @ViewChild('toastText') toastText!: ElementRef;

  ngOnInit(): void {
    this.toastMessage = this.getRandomToast();
  }

  getRandomToast(): string {
    const maxNumber = CongratulationToasts.length;
    return CongratulationToasts[Math.floor(Math.random() * maxNumber)]
  }

  getToast(): void {
    if (!this.isAnimationEnds) return;
    this.isAnimationEnds = false;

    this.renderer.addClass(this.wineglassLeft.nativeElement, AnimationClasses.LeftWineglass)
    this.renderer.addClass(this.wineglassRight.nativeElement, AnimationClasses.RightWineglass)
    this.renderer.addClass(this.toastText.nativeElement, AnimationClasses.TextContainer)

    setTimeout(() => {
      this.toastMessage = this.getRandomToast();
    }, 660)

    setTimeout(() => {
      this.renderer.removeClass(this.wineglassLeft.nativeElement, AnimationClasses.LeftWineglass)
      this.renderer.removeClass(this.wineglassRight.nativeElement, AnimationClasses.RightWineglass)
      this.renderer.removeClass(this.toastText.nativeElement, AnimationClasses.TextContainer)
      this.isAnimationEnds = true;
    }, 1000);
  }

}
