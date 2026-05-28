# Stage 1: Build de l'application
# (Pas de directive syntax= pour éviter d'appeler Docker Hub sur le serveur de déploiement)
ARG NODE_VERSION=22.13.1

ARG VITE_EMAILJS_PUBLIC_KEY
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_CONTACT_TEMPLATE_ID
ARG VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID
ARG VITE_APP_NAME
ARG VITE_APP_URL

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps --no-audit

COPY . .

ENV VITE_EMAILJS_PUBLIC_KEY=${VITE_EMAILJS_PUBLIC_KEY}
ENV VITE_EMAILJS_SERVICE_ID=${VITE_EMAILJS_SERVICE_ID}
ENV VITE_EMAILJS_CONTACT_TEMPLATE_ID=${VITE_EMAILJS_CONTACT_TEMPLATE_ID}
ENV VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=${VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID}
ENV VITE_APP_NAME=${VITE_APP_NAME}
ENV VITE_APP_URL=${VITE_APP_URL}
ENV NODE_ENV=production

RUN rm -rf node_modules/.cache .vite dist || true
RUN npx vite build

# Stage 2: Serveur nginx pour la production
FROM nginx:alpine AS production

COPY setup-pricing/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
