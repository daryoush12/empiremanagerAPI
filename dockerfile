FROM node

WORKDIR /usr/app/

COPY package* .
RUN npm i
COPY . .

ENTRYPOINT [ "npm", "run", "start" ]