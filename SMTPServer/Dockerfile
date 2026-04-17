FROM alpine:3.20

LABEL maintainer="me@ardial.my.id"

# Install packages
RUN apk update && \
    apk add --no-cache \
    postfix \
    postfix-pcre \
    opendkim \
    opendkim-utils \
    mailx \
    dovecot \
    dovecot-lmtpd \
    rsyslog \
    netcat-openbsd \
    net-tools && \
    rm -rf /var/cache/apk/*

# Configure DKIM directories
RUN mkdir -p /etc/opendkim/keys/mail.ardial.my.id/ && \
    chown -R root:root /etc/opendkim

RUN mkdir -p /run/opendkim && \
    chown root:root /run/opendkim

# Copy DKIM config
COPY OpenDKIM/opendkim.conf /etc/opendkim/
COPY OpenDKIM/TrustedHosts OpenDKIM/KeyTable OpenDKIM/SigningTable /etc/opendkim/
COPY Credentials/OpenDKIM/priv.key /etc/opendkim/keys/mail.ardial.my.id/mail.private

# Copy Postfix config
COPY Postfix/main.cf /etc/postfix/main.cf
COPY Postfix/master.cf /etc/postfix/master.cf

COPY Credentials/SSL/fullchain.pem /etc/postfix/ssl/fullchain.pem
COPY Credentials/SSL/privkey.pem /etc/postfix/ssl/privkey.pem

# Copy Dovecot configuration files
COPY Dovecot/dovecot.conf /etc/dovecot/dovecot.conf
COPY Dovecot/10-auth.conf /etc/dovecot/conf.d/10-auth.conf
COPY Dovecot/10-mail.conf /etc/dovecot/conf.d/10-mail.conf
COPY Dovecot/10-master.conf /etc/dovecot/conf.d/10-master.conf
COPY Dovecot/auth-passwdfile.conf.ext /etc/dovecot/conf.d/auth-passwdfile.conf.ext

# Copy startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Expose ports
EXPOSE 25 587 143 993

CMD ["/start.sh"]
