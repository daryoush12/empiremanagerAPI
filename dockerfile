FROM node

WORKDIR /usr/app/

COPY package* .
RUN npm i

ENTRYPOINT [ "npm run start" ]