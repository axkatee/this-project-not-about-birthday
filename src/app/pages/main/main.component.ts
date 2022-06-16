import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Engine} from 'tsparticles-engine';
import {loadFireworksPreset} from 'tsparticles-preset-fireworks';
import {Pages} from '@consts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isShowGift = false;

  constructor(private _router: Router) { }

  ngOnInit(): void { }

  id = "tsparticles";
  particlesOptions = {
    particles: {
      stroke: {
        color: {
          value: "rgb(141,141,141)"
        },
      },
      move: {
        trail: {
          fillColor: '#fff'
        }
      }
    },
    background: {
      color: "#fff"
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    preset: "fireworks",
  };

  async particlesInit(engine: Engine): Promise<void> {
    await loadFireworksPreset(engine);
  }

  onGiftClick(): void {
    this._router.navigate([Pages.CongratulationToasts]);
  }

  showGift(event: boolean): void {
   this.isShowGift = event;
  }
}
