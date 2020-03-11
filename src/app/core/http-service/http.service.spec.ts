import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { HttpService } from './http.service';
import { HttpClientStub } from './testing/http-client.stub';

describe('HttpService', () => {
  let service: HttpService, client: HttpClientStub, result: any, apiUrl: string;

  function getReturnPromise(type: string): void {
    // @ts-ignore
    (client[type] as jasmine.Spy).and.returnValue({
      toPromise: jasmine.createSpy('toPromise').and.returnValue(`${type}Promise`)
    });
  }

  beforeEach(() => {
    apiUrl = 'http://localhost:3400/api/v1/';
    client = new HttpClientStub();

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: client }]
    });

    service = TestBed.inject(HttpService);
  });

  describe('when getting a resource from the API', () => {
    let args: Array<any>;

    beforeEach(() => {});

    describe('when a partial URL is supplied', () => {
      beforeEach(() => {
        getReturnPromise('get');
        result = service.get('get/url');
        args = (client.get as jasmine.Spy).calls.mostRecent().args;
      });

      it('should post the data to the API', () => {
        expect(args[0]).toBe(apiUrl + 'get/url');
      });

      it('should return the response', () => {
        expect(result).toBe('getPromise');
      });
    });

    describe('when an full URL is supplied', () => {
      beforeEach(() => {
        getReturnPromise('get');
        service.get(`${apiUrl}get/url`);
        args = (client.get as jasmine.Spy).calls.mostRecent().args;
      });

      it('should post the data with the correct url to the API', () => {
        expect(args[0]).toBe(apiUrl + 'get/url');
      });
    });
  });

  describe('when posting a resource to the API', () => {
    let args: Array<any>;

    beforeEach(() => {
      getReturnPromise('post');
      result = service.post('post/url', { data: 'newData' });
      args = (client.post as jasmine.Spy).calls.mostRecent().args;
    });

    it('should post the data to the API', () => {
      expect(args[0]).toBe(apiUrl + 'post/url');
      expect(args[1]).toEqual({ data: 'newData' });
    });

    it('should return the response', () => {
      expect(result).toBe('postPromise');
    });
  });

  describe('when putting a resource to the API', () => {
    let args: Array<any>;

    beforeEach(() => {
      getReturnPromise('put');
      result = service.put('put/url', { data: 'putData' });
      args = (client.put as jasmine.Spy).calls.mostRecent().args;
    });

    it('should post the data to the API', () => {
      expect(args[0]).toBe(apiUrl + 'put/url');
      expect(args[1]).toEqual({ data: 'putData' });
    });

    it('should return the response', () => {
      expect(result).toBe('putPromise');
    });
  });

  describe('when deleting a resource from the API', () => {
    let args: Array<any>;

    beforeEach(() => {
      getReturnPromise('delete');
      result = service.delete('delete/url');
      args = (client.delete as jasmine.Spy).calls.mostRecent().args;
    });

    it('should post the data to the API', () => {
      expect(args[0]).toBe(apiUrl + 'delete/url');
    });

    it('should return the response', () => {
      expect(result).toBe('deletePromise');
    });
  });
});

describe('when in production', () => {
  let service: HttpService, client: HttpClientStub, result: any, apiUrl: string;

  beforeEach(() => {
    apiUrl = 'http://liveurl/api/v1/';
    client = new HttpClientStub();

    environment.production = true;

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: client }]
    });

    service = TestBed.inject(HttpService);
  });

  afterEach(() => {
    environment.production = false;
  });

  it('should use the live api link', () => {
    expect(service['_activeUrl']).toBe(apiUrl);
  });
});
