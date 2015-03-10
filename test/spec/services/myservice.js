'use strict';

describe('Service: myService', function () {

  // load the service's module
  beforeEach(module('yoApp'));

  // instantiate service
  var myService;
  beforeEach(inject(function (_myService_) {
    myService = _myService_;
  }));

  it('should do something', function () {
    expect(!!myService).toBe(true);
  });

  it('should get login success', inject(function(myService, $httpBackend) {
    $httpBackend.expect('POST', 'https://api.mydomain.com/login')
      .respond(200, {success: true, id : 123});

    myService.doLogin('abc', 'password').then(function(data) {
        expect(data.success).toBeTruthy();
    });

    $httpBackend.flush();
  }));

});
