# Etapa 1: Build de la app Angular
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Servidor NGINX para servir archivos estáticos
FROM nginx:stable-alpine

COPY --from=build /app/dist/sonidos /usr/share/nginx/html

# Opcional: sobrescribir configuración de NGINX si tienes un archivo personalizado
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



