import { Injectable } from '@angular/core';
import { Balance } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  saveMonthlyBalance(balance: Balance) {
    localStorage.setItem('monthlyBalance', JSON.stringify(balance));
  }

  getMonthlyBalance(): Balance | null {
    const savedBalance = localStorage.getItem('monthlyBalance');
    return savedBalance ? JSON.parse(savedBalance) : null;
  }
}
