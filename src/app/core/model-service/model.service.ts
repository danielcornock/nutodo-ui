import { Injectable } from '@angular/core';
import { HttpCollectionFactory, HttpModelFactory, IHttpCollection, IHttpModel, IHttpResponse } from '@danielc7150/ng-api';

import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  constructor(private readonly _httpService: HttpService) {}

  public async get(url: string): Promise<IHttpModel> {
    const res: IHttpResponse = await this._httpService.get(url);

    return HttpModelFactory.create(res, this._httpService);
  }

  public async list(url: string): Promise<IHttpCollection> {
    const res: IHttpResponse = await this._httpService.get(url);

    return HttpCollectionFactory.create(res, this._httpService);
  }

  public async post(url: string, data: any): Promise<IHttpModel> {
    const res: IHttpResponse = await this._httpService.post(url, data);

    return HttpModelFactory.create(res, this._httpService);
  }
}
