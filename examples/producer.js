/* eslint-disable no-console */

const opts = { brokers: 'kafka://127.0.0.1:9092' };
const messages = [
  { key: 'value1' },
  { key: 'value2' }
];

const KafkaObservable = require('..')(opts);

const producer = KafkaObservable.toTopic('test', messages);

producer.subscribe(message => console.log(message));
