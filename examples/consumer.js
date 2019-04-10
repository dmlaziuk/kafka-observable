/* eslint-disable no-console */

const opts = { brokers: 'kafka://127.0.0.1:9092', groupId: 'test' };

// const KafkaObservable = require('kafka-observable')(opts);
const KafkaObservable = require('..')(opts);

const consumer = KafkaObservable.fromTopic('test')
  .map(({ message }) => message.value.toString('utf8'));

consumer.subscribe(message => console.log(message));
