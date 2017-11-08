FROM node:latest

WORKDIR /
ADD . /
EXPOSE 9500 
RUN npm install  
CMD ["npm", "run", "dev"]
