import * as supertest from 'supertest';
import * as chai from 'chai';
import { expect } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import server from '../../server';

chai.should();
chai.use(chaiAsPromised);
const app = supertest(server);

describe('Server starting', () => {
  describe('App starting', () => {
    let test: supertest.Test;

    before(() => {
      test = app.get('/');

      return test;
    });

    it('Status 200', () =>
      expect(test).to.eventually.have.deep.property('ok', true));
  });
});
