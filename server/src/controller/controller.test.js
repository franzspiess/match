const chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.should();
require('chai').should();
const Controller =  require('./controller');
const proxyquire = require('proxyquire');

describe('create', () => {

  it('should reject if the user is in the database',
  async () => {
    const ctx = {
      request: {
        body: {
          email: 'rafael@nadal.com'
        }
      }
    }
    await Controller.create(ctx);
    ctx.status.should.eql(401);
  });

  it('should create a user',
  async () => {
    const spy = sinon.spy();
    const ctx = {
      request: {
        body: {
          idid: '',
          email: 'abc@abc.com',
          password: 'test',
          first: 'thisismytest',
          last: 'name',
        }
      }
    };
    const mockUser = {
      idid: ctx.request.body.idid,
      email: ctx.request.body.email,
      password: ctx.request.body.password,
      first: ctx.request.body.first,
      last: ctx.request.body.last
    };
    const EventController = proxyquire('./controller',
      {
        '../model/story.model': {
          '@noCallThru': true,
          findOne: () => ({
            id: 123,
            save: spy,
            events: [],
          })
        }
      },

      {
        '../model/event.model': {
          '@noCallThru': true,
          create: () => mockEvent
        }
      });

    await EventController.addEvent(ctx);
    ctx.request.body.should.eql(mockEvent);
  }
  );
  it('should be called with the provided arguments',
  function () {
    var addEventSpy = sinon.spy(Controller.create);
    Controller.create(true, true);
    addEventSpy.calledWith(true, true);
    // addEventSpy.restore();
  }
);

});