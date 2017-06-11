start:
	docker-compose up -d

stop:
	docker-compose down

dlogs:
	docker-compose logs -f --tail 100

shell:
	docker-compose exec app bash

restart: stop start
