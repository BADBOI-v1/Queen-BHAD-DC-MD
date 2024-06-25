FROM node:lts-buster
RUN git clone https://github.com/DeeCeeXxx/QUEEN_ANITA-V2 /root/DeeCeeXxx
WORKDIR /root/DeeCeeXxx
RUN npm install
EXPOSE 5000
CMD ["npm","start" ] 
#ASTA
