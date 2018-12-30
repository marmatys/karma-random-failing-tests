describe('UserService', () => {
  let userService;
  let http;

  beforeEach(() => {
    http = jasmine.createSpyObj('http', ['user']);
    userService = new UserService(http);
  });

  it('currentUser should be empty when no data is fetched', () => {
    const user = userService.currentUser;

    expect(user).toBeNull();
  });

  it('currentUser should data that are fetched from http', () => {
    http.user.and.returnValue({firstName: 'Joe', lastName: 'Doe'});

    userService.retrieveUser();

    expect(userService.currentUser.firstName).toEqual('Joe');
    expect(userService.currentUser.lastName).toEqual('Doe');
  });
});
