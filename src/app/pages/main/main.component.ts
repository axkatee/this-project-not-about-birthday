import {Component, OnInit} from '@angular/core';
import {Engine} from 'tsparticles-engine';
import {loadFireworksPreset} from 'tsparticles-preset-fireworks';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
}
