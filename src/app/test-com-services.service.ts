import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestComServicesService {

  constructor(private Http : HttpClient) { }
}
