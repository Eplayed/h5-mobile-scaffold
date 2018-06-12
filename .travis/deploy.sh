#!/bin/bash

# Set some git options
git config --global user.name $COMMIT_AUTHOR_NAME
git config --global user.email $COMMIT_AUTHOR_EMAIL

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in .travis/deploy_key.enc -out ~/.ssh/id_rsa -d

# Set the permission of the key
chmod 600 ~/.ssh/id_rsa

# Start SSH agent
eval `ssh-agent -s`

# Add the private key to the system
ssh-add ~/.ssh/id_rsa

# Run our compile script
npm run build

# Now that we're all set up, we can push.
node .travis/deploy.js
