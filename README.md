## Описание проекта  
* приложение разбито на компоненты
* компоненты проходят автотесты
* настроен deploy на senrty и netlify

## Команды Yarn
```bash
yarn start
yarn test
yarn build
yarn eject
```

## Команды GIT проекта

1. Перейти в ветку:
* git checkout master

2. Скачать файлы из ветки на компьютер:
* git pull

3. Создать новую ветку от той, в которой я был:
* git checkout -b test

4. Добавить все файлы:
* git add .

5. Добавить commit:
* git commit -m 'test'

6. Закачать изменения в git:
* git push origin test

7. Слить ветку локальную (test) с веткой (master):
* git checkout master
* git merge test

## Команды GIT проекта

1. Проверить в какой ветке
```bash
git checkout
```

2. Перейти в ветку
```bash
git checkout master
```

3. Скачать файлы из ветки на компьютер
```bash
git pull
```

4. Создать новую ветку от той, в которой я был
```bash
git checkout -b test
```

5. Изменить файлы

6. Добавить все изменённые файлы
```bash
git add .
```

7. Добавить commit
```bash
git commit -m 'test'
```

8. Закачать изменения в git
```bash
git push origin test
```

9. Слить ветку локальную (test) с веткой master:
```bash
git checkout master
git merge test
```


## Добавить ssh ключ для доступа

Команды для git bush:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Ссылка на добавление:  
[https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent "Инструкция на полный процесс создания и добавления ключа")