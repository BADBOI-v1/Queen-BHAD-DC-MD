FROM node:16
RUN git clone https://github.com/DeeCeeXxx/QUEEN_ANITA-V2 /root/DeeCeeXxx
WORKDIR /root/DeeCeeXxx
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#David
