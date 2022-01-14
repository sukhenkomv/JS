curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn

npx @nestjs/cli new nest-next
yarn add next react react-dom
yarn add -D @types/react @types/react-dom eslint-config-next

yarn add nest-next

Дока:
https://habr.com/ru/post/570886/


