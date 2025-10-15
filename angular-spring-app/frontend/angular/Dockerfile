FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "start-host"]