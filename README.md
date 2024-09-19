# 🌐 Client Gateway

<p align="center">
  <img src="https://nestjs.com/img/logo_text.svg" alt="NestJS Logo" width="300"/>
</p>

The Client Gateway acts as the communication point between clients and our services. It is responsible for receiving requests, forwarding them to the appropriate services, and returning the responses to the client.

## 🚀 Development Setup

1. **📥 Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/client-gateway
   cd client-gateway
   ```

2. **📦 Install dependencies:**
   ```bash
   npm install
   ```

3. **🔧 Set up environment variables:**
   Create a `.env` file based on the provided `.env.template`:
   ```bash
   cp .env.template .env
   ```
   Edit the `.env` file to add the required environment variables.

4. **🔄 Start the microservices to be consumed:**
   Make sure the microservices that the gateway will consume are up and running.

5. **🛠️ Start the application in development mode:**
   ```bash
   npm run start:dev
   ```

## 📚 Documentation

- For more details about the gateway's functionality and usage, refer to the `docs` folder or any API documentation provided.
- Learn more about NestJS at [nestjs.com](https://nestjs.com).

---

## Nats
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
