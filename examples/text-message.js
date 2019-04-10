/* eslint-disable no-console */

const opts = { brokers: 'kafka://127.0.0.1:9092', groupId: 'test' };

const KafkaObservable = require('..');

const consumer = KafkaObservable.fromTopic('test', opts)
  .let(KafkaObservable.TextMessage());

consumer.subscribe(message => console.log(message));
