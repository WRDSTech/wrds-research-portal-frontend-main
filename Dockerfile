FROM nginx:alpine
COPY dist /usr/share/nginx/html
# COPY server.key /ssl/
# COPY server.crt /ssl/
COPY default.conf /etc/nginx/conf.d/