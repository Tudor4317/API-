FROM node
COPY . /api
WORKDIR /api
RUN npm install
RUN npx prisma generate
CMD ["node","--env-file=.env", "app.js"]





