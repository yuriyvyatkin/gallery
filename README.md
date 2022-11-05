## Тестовое задание компании Retmind
---
**Стек**: React, Redux, Bootstrap

**Задание**:

Нужно написать сайт с информацией об NFT картинах

для того чтобы стянуть NFT картины есть ENDPOINT - https://api.opensea.io/api/v1/assets?format=json

для того что бы стянуть NFT картину есть EDNPOINT: https://api.opensea.io/api/v1/asset/{contract_address}/{token_id}/

API Docs: https://docs.opensea.io/reference/api-overview

GET - запрос будет возвращать JSON:
{
	next: next_url,
	previous: previous_url,
	assets: [{object_of_asset}]
}

url / - будут отображаться все NFT картины в виде простых карточек с самой NFT, названием и кнопкой “подробнее”

url /nft/:id/ -
будет подробная информация об NFT картине (пример JSON объекта выше по ENDPOINT)

Дополнения:
-	Сделать компонент Loader (спиннер)
-	Минимальные анимации (hover, focus, after, before, transform и тд)

Обязательно:
-	Использовать React
-	Реализовать state management на Redux
-	Приятный глазу дизайн (MUI, AntD, Bootstrap)
