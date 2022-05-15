FROM node:lts

RUN apt-get update && \
	apt-get -y --no-install-recommends install tzdata && \
	ln -sf /usr/share/zoneinfo/Europe/Paris /etc/localtime && \
	echo "Europe/Paris" > /etc/timezone && \
	dpkg-reconfigure -f noninteractive tzdata && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm -g install next

EXPOSE 3000

# ENTRYPOINT ["/bin/sh", "-c", "npm install --non-interactive && npm start"]
ENTRYPOINT ["/bin/sh", "-c", "npm install --force && npm run build && npm start"]