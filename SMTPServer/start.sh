#!/bin/sh

# Generate DH parameters for SSL (if missing)
if [ ! -f /etc/dovecot/dh.pem ]; then
    openssl dhparam -out /etc/dovecot/dh.pem 512
fi

if ! getent group vmail >/dev/null; then
    addgroup -g 5000 -S vmail
fi

if ! id -u vmail >/dev/null 2>&1; then
    adduser -u 5000 -S -G vmail vmail
fi

if ! getent group opendkim >/dev/null; then
    addgroup -S opendkim
fi

if ! id -u opendkim >/dev/null 2>&1; then
    adduser -S -G opendkim opendkim
fi

VMAIL_UID=$(getent passwd vmail | cut -d: -f3)
VMAIL_GID=$(getent passwd vmail | cut -d: -f4)

mkdir -p /vmail/mail.ardial.my.id/user1/Maildir
mkdir -p /vmail/mail.ardial.my.id/user2/Maildir
chown -R 5000:5000 /vmail
chmod -R 770 /vmail

mkdir -p /etc/dovecot
cat > /etc/dovecot/passwd <<EOF
user1@mail.ardial.my.id:{PLAIN}secret123::::::
user2@mail.ardial.my.id:{PLAIN}secret456::::::
EOF
chown dovecot:dovecot /etc/dovecot/passwd
chmod 640 /etc/dovecot/passwd

mkdir -p /etc/postfix
cat > /etc/postfix/vmailbox <<EOF
user1@mail.ardial.my.id mail.ardial.my.id/user1/
user2@mail.ardial.my.id mail.ardial.my.id/user2/
EOF
postmap /etc/postfix/vmailbox

touch /etc/postfix/aliases
postalias /etc/postfix/aliases

postconf compatibility_level=3.6

chown root:root /etc/opendkim
chmod 755 /etc/opendkim

chown root:root /etc/opendkim/keys
chmod 755 /etc/opendkim/keys

chown root:root /etc/opendkim/keys/mail.ardial.my.id
chmod 755 /etc/opendkim/keys/mail.ardial.my.id

chown root:opendkim /etc/opendkim/keys/mail.ardial.my.id/mail.private
chmod 750 /etc/opendkim/keys/mail.ardial.my.id/mail.private

touch /var/log/mail.log
chmod 666 /var/log/mail.log

if [ ! -f /etc/opendkim/keys/mail.ardial.my.id/mail.private ]; then
    echo "[ERROR] DKIM private key not found at /etc/opendkim/keys/mail.ardial.my.id/mail.private"
    exit 1
fi

rsyslogd
opendkim -f &

echo "Menunggu OpenDKIM siap di port 8891..."
while ! nc -z localhost 8891; do
    sleep 0.5
done
echo "OpenDKIM aktif!"

dovecot &
postfix start-fg &

tail -F /var/log/mail.log


