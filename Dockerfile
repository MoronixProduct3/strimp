FROM node

COPY . .

RUN npm install
RUN npm run build

EXPOSE 80
EXPOSE 9000

CMD ["node", "backend.js"]