FROM node
COPY . /api
WORKDIR /api
RUN npm install
RUN npx prisma generate
CMD sh -c "npx prisma migrate dev  && node app.js"





