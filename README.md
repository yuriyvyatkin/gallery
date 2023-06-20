## Галлерея NFT картинок на базе OpenSea API

**🛠️ Стек**

React + Redux + Bootstrap

**💬 Основная информация о проекте**

Есть два маршрута:

url/ - отображаются все NFT картинки в виде карточек с самой NFT, названием и кнопкой "Подробнее";

url/nft/:id/ - отображается подробная информация об NFT картинке.

**📚 Инструкция по запуску**

##### 1. Клонирование

```
git clone https://github.com/yuriyvyatkin/gallery.git
```

```
cd gallery
```

##### 2. Запуск

```
npm i && npm run start
```

или

```
npm install
```

```
npm run start
```

**📝 Техническая информация**

Формат запроса для получения NFT картинок: https://api.opensea.io/api/v1/assets?format=json

Формат запроса для получения одной NFT картинки: https://api.opensea.io/api/v1/asset/{contract_address}/{token_id}/

GET запрос возвращает JSON вида:
{
	next: next_url,
	previous: previous_url,
	assets: [{object_of_asset}]
}

Ссылка на документацию: https://docs.opensea.io/reference/api-overview
