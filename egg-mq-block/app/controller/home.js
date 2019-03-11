'use strict';

const Controller = require('egg').Controller;
const Bull = require('bull');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';

    const q1 = new Bull('q1');
    const q2 = new Bull('q2');

    q1.add({demoId: 1});
    q2.add({demoId: 1});
  }
}

module.exports = HomeController;
