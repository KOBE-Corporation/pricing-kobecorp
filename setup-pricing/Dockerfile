ARG NODE_VERSION=22.13.1

FROM node:${NODE_VERSION}-alpine

# Environnement de production
ENV NODE_ENV=production

WORKDIR /usr/src/app

# Copie des fichiers de configuration npm
COPY package*.json ./

# Installation des dépendances (inclut dev pour build + preview Vite)
# Important : on installe aussi les devDependencies pour que `tsc` et Vite soient disponibles au build.
RUN npm ci --include=dev

# Copie du reste de l'application
COPY . .

# Variables Vite (build-time, lues depuis setup-pricing/.env ou CI build-args)
ARG VITE_EMAILJS_PUBLIC_KEY
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_CONTACT_TEMPLATE_ID
ARG VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID
ARG VITE_APP_NAME
ARG VITE_APP_URL
ENV VITE_EMAILJS_PUBLIC_KEY=$VITE_EMAILJS_PUBLIC_KEY
ENV VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID
ENV VITE_EMAILJS_CONTACT_TEMPLATE_ID=$VITE_EMAILJS_CONTACT_TEMPLATE_ID
ENV VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=$VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID
ENV VITE_APP_NAME=$VITE_APP_NAME
ENV VITE_APP_URL=$VITE_APP_URL

# Build de l'application pour la production
RUN npm run build

# L'application sera servie via `vite preview` sur le port 80
EXPOSE 80

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "80"]
