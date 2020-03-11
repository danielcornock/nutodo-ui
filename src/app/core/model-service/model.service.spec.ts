import { async } from '@angular/core/testing';
import { HttpModelFactory, HttpModelStub, IHttpModel, IHttpResponse } from '@danielc7150/ng-api';

import { TestPromise } from '../../testing/test-promise';
import { HttpService } from '../http-service/http.service';
import { HttpServiceStub } from '../http-service/http.service.stub';
import { ModelService } from './model.service';

describe('ModelService', () => {
  let service: ModelService,
    modelStub: IHttpModel,
    result: Promise<Partial<IHttpResponse>>,
    dependencies: {
      httpService: HttpService;
    };

  beforeEach(() => {
    dependencies = {
      httpService: (new HttpServiceStub() as Partial<HttpService>) as HttpService
    };

    modelStub = new HttpModelStub();
    spyOn(HttpModelFactory, 'create').and.returnValue(modelStub);

    service = new ModelService(dependencies.httpService);
  });

  describe('when getting a model', () => {
    let getPromise: TestPromise<Partial<IHttpResponse>>;

    beforeEach(async () => {
      getPromise = new TestPromise();

      (dependencies.httpService.get as jasmine.Spy).and.returnValue(getPromise.promise);

      result = service.get('link/get');
    });

    it('should fetch the data from the api', () => {
      expect(dependencies.httpService.get).toHaveBeenCalledWith('link/get');
    });

    describe('when the model is fetched', () => {
      beforeEach(async(() => {
        getPromise.resolve({ data: {} });
      }));

      it('should create a new model', () => {
        expect(HttpModelFactory.create).toHaveBeenCalledWith({ data: {} } as IHttpResponse, dependencies.httpService);
      });

      it('should return the model', async () => {
        expect((await result) instanceof HttpModelStub).toBe(true);
      });
    });
  });

  describe('when posting a model', () => {
    let postPromise: TestPromise<Partial<IHttpResponse>>;

    beforeEach(() => {
      postPromise = new TestPromise();

      (dependencies.httpService.post as jasmine.Spy).and.returnValue(postPromise.promise);

      result = service.post('link/post', { data: 'data' });
    });

    it('should post the data to the api', () => {
      expect(dependencies.httpService.post).toHaveBeenCalledWith('link/post', {
        data: 'data'
      });
    });

    describe('when the model is posted', () => {
      beforeEach(async(() => {
        postPromise.resolve({ data: {} });
      }));

      it('should create a new model', () => {
        expect(HttpModelFactory.create).toHaveBeenCalledWith({ data: {} } as IHttpResponse, dependencies.httpService);
      });

      it('should return the model', async () => {
        expect((await result) instanceof HttpModelStub).toBe(true);
      });
    });
  });
});
