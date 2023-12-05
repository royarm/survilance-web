FROM nginx:latest

COPY htmls /usr/share/nginx/html
COPY nginx.conf /etc/nginx/
COPY cert.pem /etc/ssl/
COPY privateKey.key /etc/ssl/

EXPOSE 9080
EXPOSE 9081
CMD ["nginx", "-g", "daemon off;"]

