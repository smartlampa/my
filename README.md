1) Пример для генерирования прямой ссылки скрипта для добавления в плагины lampa:  
https://cdn.jsdelivr.net/gh/smartlampa/my/stream.js  * где gh - это гитхаб | smartlampa/my - репозиторий 

2) Для того, чтобы сбросить кэш для определенного файла на cdn.jsdelivr.net =>> достаточно отправить http GET запрос по тому же URI файла, но с заменой домена cdn.jsdelivr.net на purge.jsdelivr.net. Просто и гениально 😉 Например: https://purge.jsdelivr.net/gh/smartlampa/my/stream.js    *где stream.js - файл для которого нужно сбросить кэш

