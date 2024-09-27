import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kezdolap',
  standalone: true,
  imports: [KezdolapComponent, FormsModule, CommonModule],
  templateUrl: './kezdolap.component.html',
  styleUrl: './kezdolap.component.scss'
})
export class KezdolapComponent {
  options = [
    { title: 'Legszebb autó', isOpen: true, plate: '' },
    { title: 'Legmacsósabb autó', isOpen: true, plate: '' },
    { title: 'Legcsajosabb autó', isOpen: true, plate: '' }
  ];

  toggleOption(index: number) {
    this.options[index].isOpen = !this.options[index].isOpen;
  }

  submit(index: number) {
    alert(`A beküldött rendszám az ${this.options[index].title} számára: ${this.options[index].plate}`);
    this.options[index].isOpen = false; // Becsukja az opciót a küldés után
  }
}
