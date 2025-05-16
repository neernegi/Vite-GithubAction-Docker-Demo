FROM node:20

WORKDIR /myApp

COPY . .


RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]

