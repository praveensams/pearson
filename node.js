FROM node

MAINTAINER praveensam

COPY build.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/build.sh 

CMD ./usr/local/bin/build.sh
