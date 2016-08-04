FROM iojs:3

RUN mkdir -p /app
WORKDIR /app
COPY client/package.json /app/package.json
RUN npm install; npm cache clean

EXPOSE 8080
