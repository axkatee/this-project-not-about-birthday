import {Component, OnInit} from '@angular/core';
import {Engine} from 'tsparticles-engine';
import {loadFireworksPreset} from 'tsparticles-preset-fireworks'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  id = "tsparticles";
  particlesOptions = {
    preset: "fireworks",
  };

  constructor() { }

  ngOnInit(): void {
  }

  public particlesInit(engine: any): Promise<void> {
    return loadFireworksPreset(engine as Engine);
  }

}
