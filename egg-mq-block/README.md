# mq-block

## 快速开始

```bash
docker-compose up -d
npm run dev
```

服务启动后，访问 home 页面，默认往两个消息队列里面添加消息，此时，由于 dev 模式只有一个 app worker 进程，导致后续的 web 请求被阻塞，q2 消息队列需要等 q1 消息队列处理完才能执行。
