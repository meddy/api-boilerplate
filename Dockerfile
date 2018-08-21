FROM node:10

# Set directory to store application code.
WORKDIR /usr/src/app

# Ensure both package.json AND package-lock.json are copied.
# Install modules first, so that we don't reinstall modules on every rebuild.
COPY package*.json ./
RUN npm install

# Bundle app source into WORKDIR.
COPY . .

EXPOSE 8080
# Avoid extra process and swallowed errors from invoking with npm start.
CMD ["node","bin/serve.js"]
