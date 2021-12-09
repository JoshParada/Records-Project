import { Component, OnInit } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.scss']
})
export class AngularFormComponent implements OnInit {

  positions: string[] = ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center']
  tuneSquad: Player[] = []
  output: string = ''
  p1: string = ''
  p2: string = ''
  p3: string = ''
  p4: string = ''
  p5: string = ''
  counter: number = 0;

  player1: Player = {
    position: '',
    fname: '',
    lname: '',
    skill: '',
    number: 0
  }

  constructor() { }

  ngOnInit(): void {
  }


  submitPlayer(isValid: boolean | null) {
    if (isValid) {
      if (this.counter < 5) {
        let newPlayer = { ...this.player1 }
        this.tuneSquad.push(newPlayer)
        this.output = `You have ${4 - this.counter} open spots left`
        this.counter++;
      } else {
        this.output = 'Full Team:'
        this.p1 = `#${this.tuneSquad[0].number} ${this.tuneSquad[0].fname} ${this.tuneSquad[0].lname} at the ${this.tuneSquad[0].position} position is skilled at ${this.tuneSquad[0].skill} `
        this.p2 = `#${this.tuneSquad[1].number} ${this.tuneSquad[1].fname} ${this.tuneSquad[1].lname} at the ${this.tuneSquad[1].position} position is skilled at ${this.tuneSquad[1].skill} `
        this.p3 = `#${this.tuneSquad[2].number} ${this.tuneSquad[2].fname} ${this.tuneSquad[2].lname} at the ${this.tuneSquad[2].position} position is skilled at ${this.tuneSquad[2].skill} `
        this.p4 = `#${this.tuneSquad[3].number} ${this.tuneSquad[3].fname} ${this.tuneSquad[3].lname} at the ${this.tuneSquad[3].position} position is skilled at ${this.tuneSquad[3].skill} `
        this.p5 = `#${this.tuneSquad[4].number} ${this.tuneSquad[4].fname} ${this.tuneSquad[4].lname} at the ${this.tuneSquad[4].position} position is skilled at ${this.tuneSquad[4].skill} `
      }
      console.log(this.tuneSquad)
    }
  }
}
