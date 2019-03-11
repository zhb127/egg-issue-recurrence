const Sleep = require('sleep');
const Bull = require('bull');

module.exports = app => {

    const q1 = new Bull('q1');
    const q2 = new Bull('q2');

    q1.process((job, done) => {
        console.log('queue: q1', `job: ${job.id}`, 'start');
        Sleep.sleep(5);
        console.log('queue: q1', `job: ${job.id}`, 'end');
        done();
    });

    q2.process((job, done) => {
        console.log('queue: q2', `job: ${job.id}`, 'start');
        Sleep.sleep(5);
        console.log('queue: q2', `job: ${job.id}`, 'end');
        done();
    });
};
